package br.com.aedes.domain.model;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.aedes.domain.model.filtros.ComoSepararStrategy;

@Component
public class Separador {
	
	@Autowired
	private PrevencoesSeparadasFactory factory;
	
	public Map<?, PrevencoesSeparadas> separar(List<Prevencao> prevencoes, ComoSepararStrategy<?> comoSeparar, TipoSepararPor tipo) {
		Map<Object, PrevencoesSeparadas> prevencoesPorFoco = new TreeMap<>();
		
		if (prevencoes == null || prevencoes.isEmpty() || comoSeparar == null || tipo == null)
			throw new IllegalArgumentException("Prevencoes não pode ser null");
		
		PrevencoesSeparadas prevencoesSeparadas = null;
		
		for (Prevencao prevencao : prevencoes) {
			Object key = comoSeparar.comoSeparar(prevencao);
			
			if (prevencoesPorFoco.containsKey(key)) {
				prevencoesSeparadas = prevencoesPorFoco.get(key);
				prevencoesSeparadas.add(prevencao);
			} else {
				prevencoesSeparadas = factory.criar(tipo, key);
				prevencoesSeparadas.add(prevencao);
				
				prevencoesPorFoco.put(key, prevencoesSeparadas);
			}
		}
		
		return prevencoesPorFoco;
	}
	
}
