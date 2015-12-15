package br.com.aedes.controller;

import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_ESTADO;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_MES;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_SINCRONIZAR;
import static br.com.aedes.repository.specifications.PrevencaoSpecifications.comFoco;
import static br.com.aedes.repository.specifications.PrevencaoSpecifications.estaNesteEntedereco;
import static org.springframework.data.jpa.domain.Specifications.where;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.constante.ExceptionCode;
import br.com.aedes.domain.entity.Endereco;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.model.AgrupadorPorMes;
import br.com.aedes.domain.model.AgrupadorPorRegiao;
import br.com.aedes.domain.model.AgrupadorTemplate;
import br.com.aedes.domain.model.ConversorPercentual;
import br.com.aedes.domain.model.Grupo;
import br.com.aedes.domain.model.Percentual;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.dto.PercentualDTO;
import br.com.aedes.dto.PrevencaoDTO;
import br.com.aedes.exception.WebException;
import br.com.aedes.repository.PrevencaoRepository;

@RestController
@RequestMapping(URL_PREVENCOES)
public class PrevencaoController {
	@Autowired
	private PrevencaoRepository repository;

	@Autowired
	private ConversorPercentual conversor;

	@RequestMapping(value = URL_PREVENCOES_SINCRONIZAR, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.CREATED, reason = "Prevenção foi sincronizada com sucesso")
	@Transactional
	public void sincronizar(@RequestBody @Valid PrevencaoDTO prevencao) {
		Prevencao prevencaoPersistida = this.repository.findOneByIdCodigoCelularAndIdFocoCodigoAndIdDataCriacao(
		    prevencao.getCodigoCelular(), prevencao.getFoco().getCodigo(), prevencao.getDataCriacao());
		
		if (prevencaoPersistida != null)
      throw new WebException(HttpStatus.PRECONDITION_FAILED,
          "Não é possível sincronizar prevenção duplicada.",
          ExceptionCode.PREVENCAO_DUPLICADA);
		
		this.repository.save(this.toEntity(prevencao));
	}

	@RequestMapping(value = URL_PREVENCOES_MES, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorMes(@ModelAttribute EnderecoDTO endereco,
	    @RequestParam(required = false) Long codigoFoco) {

		List<Prevencao> prevencoes = repository.findAll(where(comFoco(codigoFoco)).and(estaNesteEntedereco(endereco)));

		if (prevencoes.isEmpty())
			return new ArrayList<>();

		AgrupadorTemplate<Integer> agrupadorPorMes = new AgrupadorPorMes();
		Map<?, Grupo> prevencoesSeparadas = agrupadorPorMes.agrupar(prevencoes);

		List<Percentual> percentuais = this.conversor.converterPercentual(prevencoesSeparadas);

		return percentuais.stream().map(p -> this.toDTO(p)).collect(Collectors.toList());
	}

	@RequestMapping(value = URL_PREVENCOES_ESTADO, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorRegiao() {
		List<Prevencao> prevencoes = this.repository.findAll();

		if (prevencoes.isEmpty())
			return new ArrayList<>();

		AgrupadorTemplate<String> agrupadorPorRegiao = new AgrupadorPorRegiao();
		Map<String, Grupo> prevencoesAgrupadas = agrupadorPorRegiao.agrupar(prevencoes);

		List<Percentual> percentuais = this.conversor.converterPercentual(prevencoesAgrupadas);

		return percentuais.stream().map(p -> this.toDTO(p)).collect(Collectors.toList());
	}

	private PercentualDTO toDTO(Percentual p) {
		return PercentualDTO.builder().chave(p.getChave()).descricao(p.getDescricao()).emDia(p.getEmDia())
		    .atrasada(p.getAtrasada()).build();
	}
	
	private Prevencao toEntity(PrevencaoDTO dto) {
		Endereco endereco = Endereco.builder()
				.estado(dto.getEndereco().getEstado())
				.cidade(dto.getEndereco().getCidade())
				.bairro(dto.getEndereco().getBairro())
				.build();
		
		Foco foco = Foco.builder()
				.codigo(dto.getFoco().getCodigo())
				.build();
		
		return Prevencao.builder()
				.id(dto.getCodigoCelular(), foco, dto.getDataCriacao())
				.dataPrazo(dto.getDataPrazo())
				.dataEfetuada(dto.getDataEfetuada())
				.endereco(endereco)
				.build();
	}
}
