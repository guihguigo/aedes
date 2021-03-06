package br.com.aedes.controller;

import static br.com.aedes.constante.PrevencaoURL.POR_CIDADE;
import static br.com.aedes.constante.PrevencaoURL.POR_ESTADO;
import static br.com.aedes.constante.PrevencaoURL.POR_FOCO;
import static br.com.aedes.constante.PrevencaoURL.POR_MES;
import static br.com.aedes.constante.PrevencaoURL.PREVENCOES;
import static br.com.aedes.repository.specification.PrevencaoSpecifications.comEndereco;
import static br.com.aedes.repository.specification.PrevencaoSpecifications.comFoco;
import static org.springframework.data.jpa.domain.Specifications.where;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.model.AgrupadorPorCidade;
import br.com.aedes.domain.model.AgrupadorPorFoco;
import br.com.aedes.domain.model.AgrupadorPorMes;
import br.com.aedes.domain.model.AgrupadorPorRegiao;
import br.com.aedes.domain.model.AgrupadorTemplate;
import br.com.aedes.domain.service.ConversorPercentualService;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.dto.PercentualDTO;
import br.com.aedes.repository.PrevencaoRepository;

@RestController
@RequestMapping(PREVENCOES)
public class PrevencaoController {
	
	@Autowired
	private PrevencaoRepository repository;

	@Autowired
	private ConversorPercentualService conversor;

	@RequestMapping(value = POR_MES, method = GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorMes(@ModelAttribute EnderecoDTO endereco, @RequestParam(required = false) Long codigoFoco) {
		List<Prevencao> prevencoes = repository.findAll(where(
				comFoco(codigoFoco)).and(comEndereco(endereco)));

		AgrupadorTemplate<Integer> agrupadorPorMes = new AgrupadorPorMes();
		
		return conversor.converterPercentual(prevencoes, agrupadorPorMes);
	}

	@RequestMapping(value = POR_ESTADO, method = GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorRegiao() {
		List<Prevencao> prevencoes = this.repository.findAll();

		AgrupadorTemplate<String> agrupadorPorRegiao = new AgrupadorPorRegiao();

		return this.conversor.converterPercentual(prevencoes, agrupadorPorRegiao);
	}
	
	@RequestMapping(value = POR_CIDADE, method = GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorCidade() {
		List<Prevencao> prevencoes = this.repository.findAll();

		AgrupadorTemplate<String> agrupadorPorRegiao = new AgrupadorPorCidade();

		return this.conversor.converterPercentual(prevencoes, agrupadorPorRegiao);
	}
	
	@RequestMapping(value = POR_FOCO, method = GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorFoco() {
		List<Prevencao> prevencoes = this.repository.findAll();

		AgrupadorTemplate<Integer> agrupadorPorFoco = new AgrupadorPorFoco();

		return this.conversor.converterPercentual(prevencoes, agrupadorPorFoco);
	}
}
