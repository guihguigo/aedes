package br.com.aedes.domain.model;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.stereotype.Component;

@Component
public class CalculadorPercentualMes {

	public Set<Percentual> converterPercentual(List<Prevencao> prevencoes) {
		if (prevencoes.isEmpty())
			return null;

		// aqui crio um comparator para ordenar por mes
		Comparator<Percentual> comparator = (Percentual obj1, Percentual obj2) -> obj1
				.getMes().compareTo(obj2.getMes());
		
		Set<Percentual> percentuais = new TreeSet<>(comparator);

		Map<Integer, List<Prevencao>> prevencoesSeparadas = this
				.separarPorMes(prevencoes);

		// aqui varro o map e adiciono a um set ordenado utilizando lambda
		prevencoesSeparadas.forEach((chave, valor) -> percentuais
				.add(new PercentualPrevencao(valor)));

		return percentuais;
	}

	private Map<Integer, List<Prevencao>> separarPorMes(
			List<Prevencao> prevencoes) {
		Map<Integer, List<Prevencao>> prevencoesSeparadas = new HashMap<>();
		List<Prevencao> lista = null;

		for (Prevencao prevencao : prevencoes) {
			Integer dia = prevencao.getMesDataPrazo();

			if (prevencoesSeparadas.containsKey(dia)) {
				lista = prevencoesSeparadas.get(dia);
				lista.add(prevencao);
			} else {
				lista = Arrays.asList(prevencao);
				prevencoesSeparadas.put(dia, lista);
			}
		}

		return prevencoesSeparadas;
	}

}
