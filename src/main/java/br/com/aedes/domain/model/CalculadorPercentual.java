package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class CalculadorPercentual {
	
	public List<Percentual> converterPercentual(Organizador organizar, List<Prevencao> prevencoes) {
		if (prevencoes.isEmpty())
			return null;
		
		List<Percentual> percentuais = new ArrayList<>();
		
		Map<Integer,PrevencoesSeparadas> prevencoesSeparadas = organizar
				.separar(prevencoes);
		
		// aqui varro o map e adiciono a um set ordenado utilizando lambda
		prevencoesSeparadas.forEach((chave, valor) -> percentuais
				.add(new PercentualPrevencao(valor)));

		return percentuais;
	}



}
