package br.com.aedes.domain.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.model.AgrupadorTemplate;
import br.com.aedes.domain.model.ConversorPercentual;
import br.com.aedes.domain.model.Grupo;
import br.com.aedes.domain.model.Percentual;
import br.com.aedes.dto.PercentualDTO;

@Service
public class ConversorPercentualService {
	@Autowired
	private ConversorPercentual conversor;
	
	public List<PercentualDTO> converterPercentual(List<Prevencao> prevencoes, AgrupadorTemplate<?> agrupadorPorMes) {
		if (prevencoes.isEmpty())
			return new ArrayList<>();
		
		Map<?, Grupo> prevencoesSeparadas = agrupadorPorMes.agrupar(prevencoes);
		List<Percentual> percentuais = this.conversor.converterPercentual(prevencoesSeparadas);

		return percentuais.stream().map(p -> this.toDTO(p))
				.collect(Collectors.toList());
	}
	
	private PercentualDTO toDTO(Percentual p) {
		return PercentualDTO.builder().chave(p.getChave())
				.descricao(p.getDescricao()).emDia(p.getEmDia())
				.atrasada(p.getAtrasada()).build();
	}
}
