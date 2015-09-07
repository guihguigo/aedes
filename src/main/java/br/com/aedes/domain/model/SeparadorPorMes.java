package br.com.aedes.domain.model;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.stereotype.Component;

/**
 * Organiza as prevenções separado por meses
 * 
 * @author guilherme
 *
 */
@Component
public class SeparadorPorMes implements SeparadorTemplate {

	/**
	 * Separa a prevenção por meses do ano
	 * 
	 * @param prevencoes
	 * @return prevenções separadas
	 */
	public Map<Integer, PrevencoesSeparadas> separar(List<Prevencao> prevencoes) {
		Map<Integer, PrevencoesSeparadas> prevencoesPorMes = new TreeMap<>();
		
		PrevencoesSeparadas  prevencoesSeparadasPorMes = null;

		for (Prevencao prevencao : prevencoes) {
			Integer key = prevencao.getMesDataPrazo();
					
			if (prevencoesPorMes.containsKey(key)) {
				prevencoesSeparadasPorMes = prevencoesPorMes.get(key);
				prevencoesSeparadasPorMes.add(prevencao);
			} else {
				prevencoesSeparadasPorMes = new PrevencoesSeparadasPorMes(key);
				prevencoesSeparadasPorMes.add(prevencao);
				
				prevencoesPorMes.put(key, prevencoesSeparadasPorMes);
			}
		}

		return prevencoesPorMes;
	}

}
