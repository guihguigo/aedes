package br.com.aedes.domain.model.filtros;

import br.com.aedes.domain.model.Prevencao;

public interface ComoSepararTemplate <T>{
	public T comoSeparar(Prevencao prevencao);
}
