package br.com.aedes.domain.model;

import org.springframework.stereotype.Component;

import br.com.aedes.domain.entity.Prevencao;

@Component
public class AgrupadorPorMes extends AgrupadorTemplate<Integer>{

	@Override
	public Integer comoSeparar(Prevencao prevencao) {
		return prevencao.getMesDataPrazo();
	}

	@Override
	public PrevencoesAgrupadas comoAgrupar() {
		return new PrevencaoAgrupadaPorMes();
	}
}
