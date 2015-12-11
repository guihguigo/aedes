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
public class ConversorPercentual {
	
	public List<Percentual> converterPercentual(List<Prevencao> prevencoes, AgrupadorTemplate<?> agrupador) {
		if (prevencoes == null || prevencoes.isEmpty())
			return null;
		
		Map<?, Grupo> prevencoesSeparadas = agrupador.separar(prevencoes);
		
		List<Percentual> percentuais = new ArrayList<>();
		
		prevencoesSeparadas.forEach((chave, valor) -> percentuais
				.add(new PercentualPrevencao(valor)));

		return percentuais;
	}
}
