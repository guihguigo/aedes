package br.com.aedes.domain.model;

import br.com.aedes.domain.entity.Prevencao;

public class AgrupadorPorCidade extends AgrupadorTemplate<String>{

	@Override
	public String comoSeparar(Prevencao prevencao) {
		return prevencao.getEndereco().getCidade();
	}

	@Override
	public PrevencoesAgrupadas comoAgrupar() {
		return new PrevencaoAgrupadaPorCidade();
	}

}
