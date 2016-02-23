package br.com.aedes.domain.model;

import org.springframework.stereotype.Component;

import br.com.aedes.domain.entity.Prevencao;

@Component
public class AgrupadorPorFoco extends AgrupadorTemplate<Integer>{

	@Override
	public Integer comoSeparar(Prevencao prevencao) {
		return prevencao.getId().getFoco().getCodigo();
	}

	@Override
	public PrevencoesAgrupadas comoAgrupar() {
		return new PrevencaoAgrupadaPorFoco();
	}
}
