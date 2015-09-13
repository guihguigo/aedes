package br.com.aedes.domain.model;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.stereotype.Component;

@Component
public class SeparadorPorFoco implements SeparadorTemplate{

	@Override
	public Map<Integer, PrevencoesSeparadas> separar(List<Prevencao> prevencoes) {
		Map<Integer, PrevencoesSeparadas> prevencoesPorFoco = new TreeMap<>();
		
		if (prevencoes == null)
			throw new IllegalArgumentException("Prevencoes não pode ser null");
		
		PrevencoesSeparadas prevencoesSeparadas = null;
		
		for (Prevencao prevencao : prevencoes) {
			Integer key = prevencao.getId().getFoco().getCodigo();
			
			if (prevencoesPorFoco.containsKey(key)) {
				prevencoesSeparadas = prevencoesPorFoco.get(key);
				prevencoesSeparadas.add(prevencao);
			} else {
				prevencoesSeparadas = new PrevencoesSeparadasPorFoco(key);
				prevencoesSeparadas.add(prevencao);
				
				prevencoesPorFoco.put(key, prevencoesSeparadas);
			}
		}
		
		return prevencoesPorFoco;
	}

}
