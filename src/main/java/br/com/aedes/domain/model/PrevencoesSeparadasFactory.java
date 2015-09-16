package br.com.aedes.domain.model;

import org.springframework.stereotype.Component;

@Component
public class PrevencoesSeparadasFactory {
	public <T> PrevencoesSeparadas criar(TipoSepararPor tipo, T key) {
		PrevencoesSeparadas prevencoesSeparadas = null;
		
		switch (tipo) {
		case FOCO :
			prevencoesSeparadas = new PrevencoesSeparadasPorFoco((Integer) key);
			break;
		case MES : 
			prevencoesSeparadas = new PrevencoesSeparadasPorMes((Integer) key);
		default:
			throw new IllegalArgumentException("TipoSepararPor não corresponde como nenhuma implementação de " 
					+ PrevencoesSeparadas.class);
			
		}
		
		return prevencoesSeparadas;
	}
	
}
