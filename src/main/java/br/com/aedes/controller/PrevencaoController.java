package br.com.aedes.controller;

import static br.com.aedes.repository.specifications.PrevencaoSpecifications.comFoco;
import static br.com.aedes.repository.specifications.PrevencaoSpecifications.estaNesteEntedereco;
import static org.springframework.data.jpa.domain.Specifications.where;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.domain.model.AgrupadorPorMes;
import br.com.aedes.domain.model.AgrupadorTemplate;
import br.com.aedes.domain.model.ConversorPercentual;
import br.com.aedes.domain.model.Grupo;
import br.com.aedes.domain.model.Percentual;
import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.dto.PercentualMesDTO;
import br.com.aedes.repository.PrevencaoRepository;

@RestController
@RequestMapping("/prevencoes")
public class PrevencaoController {
	@Autowired
	private PrevencaoRepository repository;
	
	@Autowired
	private ConversorPercentual conversor;
	
	@RequestMapping(value = "/mes", method = RequestMethod.GET)
	public List<PercentualMesDTO> list(@RequestBody EnderecoDTO endereco, @RequestParam(required = false) Long codigoFoco) {
		
		List<Prevencao> prevencoes = repository.findAll(where(comFoco(codigoFoco))
				.and(estaNesteEntedereco(endereco)));
		
		AgrupadorTemplate<Integer> agrupadorPorMes = new AgrupadorPorMes();
		Map<?, Grupo> prevencoesSeparadas = agrupadorPorMes.separar(prevencoes);

		List<Percentual> percentuais = this.conversor.converterPercentual(prevencoesSeparadas);
		
		return percentuais.stream().map(p -> this.toDTO(p)).collect(Collectors.toList());
	}

	private PercentualMesDTO toDTO(Percentual p) {
		return PercentualMesDTO.builder()
				.mes(p.getChave())
				.descricao(p.getDescricao())
				.emDia(p.getEmDia())
				.atrasada(p.getAtrasada())
				.build();
	}
	
}
