package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

/**
 * Calcula o percentual de prevenções
 * @author guilherme
 *
 */
@Component
public class CalculadorPercentual {
	
	public List<Percentual> converterPercentual(SeparadorTemplate separador, List<Prevencao> prevencoes) {
		if (prevencoes.isEmpty())
			return null;
		
		List<Percentual> percentuais = new ArrayList<>();
		
		Map<Integer,PrevencoesSeparadas> prevencoesSeparadas = separador
				.separar(prevencoes);
		
		// aqui varro o map e adiciono a um set ordenado utilizando lambda
		prevencoesSeparadas.forEach((chave, valor) -> percentuais
				.add(new PercentualPrevencao(valor)));

		return percentuais;
	}



}
