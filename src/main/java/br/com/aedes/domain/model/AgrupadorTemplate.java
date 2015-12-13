package br.com.aedes.domain.model;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import br.com.aedes.domain.entity.Prevencao;

public abstract class AgrupadorTemplate <T> {
	
	public Map<T, Grupo> agrupar(List<Prevencao> prevencoes) {
		Map<T, Grupo> prevencoesPorFoco = new TreeMap<>();
		
		if (prevencoes == null || prevencoes.isEmpty())
			throw new IllegalStateException("Prevencoes não pode ser null ou vazia");
		
		Grupo prevencoesAgrupadas = null;
		
		for (Prevencao prevencao : prevencoes) {
			T key = this.comoSeparar(prevencao);
			
			if (prevencoesPorFoco.containsKey(key)) {
				prevencoesAgrupadas = prevencoesPorFoco.get(key);
				prevencoesAgrupadas.add(prevencao);
			} else {
				prevencoesAgrupadas = this.comoAgrupar();
				prevencoesAgrupadas.add(prevencao);
				
				prevencoesPorFoco.put(key, prevencoesAgrupadas);
			}
		}
		
		return prevencoesPorFoco;
	}

	public abstract T comoSeparar(Prevencao prevencao);
	
	public abstract PrevencoesAgrupadas comoAgrupar();
}
