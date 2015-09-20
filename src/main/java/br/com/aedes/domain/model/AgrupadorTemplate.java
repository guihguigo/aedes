package br.com.aedes.domain.model;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public abstract class AgrupadorTemplate <T> {
	
	public Map<T, PrevencoesAgrupadas> separar(List<Prevencao> prevencoes) {
		Map<T, PrevencoesAgrupadas> prevencoesPorFoco = new TreeMap<>();
		
		if (prevencoes == null || prevencoes.isEmpty())
			throw new IllegalStateException("Prevencoes não pode ser null ou vazia");
		
		PrevencoesAgrupadas prevencoesSeparadas = null;
		
		for (Prevencao prevencao : prevencoes) {
			T key = this.comoSeparar(prevencao);
			
			if (prevencoesPorFoco.containsKey(key)) {
				prevencoesSeparadas = prevencoesPorFoco.get(key);
				prevencoesSeparadas.add(prevencao);
			} else {
				prevencoesSeparadas = this.criarPrevencoesSeparadas(key);
				prevencoesSeparadas.add(prevencao);
				
				prevencoesPorFoco.put(key, prevencoesSeparadas);
			}
		}
		
		return prevencoesPorFoco;
	}

	public abstract T comoSeparar(Prevencao prevencao) ;
	
	public abstract PrevencoesAgrupadas criarPrevencoesSeparadas(T t);
	
}
