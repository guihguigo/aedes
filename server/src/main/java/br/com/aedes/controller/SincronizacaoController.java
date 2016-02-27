package br.com.aedes.controller;

import static br.com.aedes.constante.SincronizacaoURL.SINCRONIZACAO;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.domain.entity.Endereco;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.dto.FocoDTO;
import br.com.aedes.dto.PrevencaoDTO;
import br.com.aedes.dto.PrevencaoIdDTO;
import br.com.aedes.repository.PrevencaoRepository;

@RestController
@RequestMapping(SINCRONIZACAO)
public class SincronizacaoController {
	@Autowired
	private PrevencaoRepository repository;

	/**
	 * Define configurações para serialização de datas
	 * 
	 * @param binder
	 */
//	@InitBinder
//	public void initBinder(final WebDataBinder binder) {
//		binder.registerCustomEditor(LocalDateTime.class, new LocalDateTimePropertyEditor("yyyy-MM-dd'T'HH:mm:ss.SSSZ"));
//	}
	
	@Transactional
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.CREATED, reason = "Prevenção foi sincronizada com sucesso")
	public void sincronizar(@RequestBody @Valid PrevencaoDTO prevencao) {
		this.repository.save(this.toEntity(prevencao));
	}

	@Transactional
//	@RequestMapping(value = DELETAR, method = RequestMethod.DELETE)
	@RequestMapping(method = RequestMethod.PUT)
	public void deletar(@RequestBody @Valid PrevencaoIdDTO id) {
		this.repository.deleteByIdCodigoCelularAndIdFocoCodigoAndIdDataCriacao(id.getCodigoCelular(), id.getCodigoFoco(), id.getDataCriacao());
	}

	private Prevencao toEntity(PrevencaoDTO dto) {
		Endereco endereco = Endereco.builder().estado(dto.getEndereco().getEstado()).cidade(dto.getEndereco().getCidade())
		    .bairro(dto.getEndereco().getBairro()).build();

		Foco foco = toEntity(dto.getFoco());

		return Prevencao.builder().id(dto.getCodigoCelular(), foco, dto.getDataCriacao()).dataPrazo(dto.getDataPrazo())
		    .dataEfetuada(dto.getDataEfetuada()).endereco(endereco).build();
	}

	private Foco toEntity(FocoDTO dto) {
		Foco foco = Foco.builder().codigo(dto.getCodigo()).build();
		return foco;
	}
}
