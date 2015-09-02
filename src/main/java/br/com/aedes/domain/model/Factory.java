package br.com.aedes.domain.model;

import java.util.List;


public interface Factory <T>{
	public List<T> constroi(TipoPercentualPrevencao tipo, List<Prevencao> prevencoes);
}
