package br.com.aedes.controller;

import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_ESTADO;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_MES;
import static br.com.aedes.repository.specifications.PrevencaoSpecifications.comEndereco;
import static br.com.aedes.repository.specifications.PrevencaoSpecifications.comFoco;
import static org.springframework.data.jpa.domain.Specifications.where;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.model.AgrupadorPorMes;
import br.com.aedes.domain.model.AgrupadorPorRegiao;
import br.com.aedes.domain.model.AgrupadorTemplate;
import br.com.aedes.domain.service.ConversorPercentualService;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.dto.PercentualDTO;
import br.com.aedes.repository.PrevencaoRepository;

@RestController
@RequestMapping(URL_PREVENCOES)
public class PrevencaoController {
	@Autowired
	private PrevencaoRepository repository;

	@Autowired
	private ConversorPercentualService conversor;

	@RequestMapping(value = URL_PREVENCOES_MES, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorMes(@ModelAttribute EnderecoDTO endereco, @RequestParam(required = false) Long codigoFoco) {
		List<Prevencao> prevencoes = repository.findAll(where(
				comFoco(codigoFoco)).and(comEndereco(endereco)));

		AgrupadorTemplate<Integer> agrupadorPorMes = new AgrupadorPorMes();
		
		return conversor.converterPercentual(prevencoes, agrupadorPorMes);
	}

	@RequestMapping(value = URL_PREVENCOES_ESTADO, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<PercentualDTO> listarPorRegiao() {
		List<Prevencao> prevencoes = this.repository.findAll();

		AgrupadorTemplate<String> agrupadorPorRegiao = new AgrupadorPorRegiao();

		return this.conversor.converterPercentual(prevencoes, agrupadorPorRegiao);
	}
}
