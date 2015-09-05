package br.com.aedes.domain.model;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.stereotype.Component;

@Component
public class SeparadorPorFoco implements SeparadorTemplate{

	@Override
	public Map<String, PrevencoesSeparadas> separar(List<Prevencao> prevencoes) {
		Map<String, PrevencoesSeparadas> prevencoesPorFoco = new TreeMap<>();
		
		PrevencoesSeparadas prevencoesSeparadas = null;
		
		for (Prevencao prevencao : prevencoes) {
			String key = prevencao.getId().getFoco().getNome();
			
			if (prevencoesPorFoco.containsKey(key)) {
				prevencoesSeparadas = prevencoesPorFoco.get(key);
				prevencoesSeparadas.add(prevencao);
			} else {
				prevencoesSeparadas = new PrevencoesSeparadsPorFoco();
				prevencoesSeparadas.add(prevencao);
				
				prevencoesPorFoco.put(key, prevencoesSeparadas);
			}
		}
		
		return prevencoesPorFoco;
	}

}
