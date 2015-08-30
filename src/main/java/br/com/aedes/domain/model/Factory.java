package br.com.aedes.domain.model;


public interface Factory <T>{
	public T constroi(TipoPercentualPrevencao tipo);
}
