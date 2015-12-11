package br.com.aedes.domain.model;

import org.springframework.stereotype.Component;

@Component
public class AgrupadorPorMes extends AgrupadorTemplate<Integer>{

	@Override
	public Integer comoSeparar(Prevencao prevencao) {
		return prevencao.getMesDataPrazo();
	}

	@Override
	public Grupo comoAgrupar() {
		return new PrevencaoAgrupadaPorMes();
	}


}
