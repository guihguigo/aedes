package br.com.aedes.domain.model;

import org.springframework.stereotype.Component;

import br.com.aedes.domain.entity.Prevencao;

@Component
public class AgrupadorPorRegiao extends AgrupadorTemplate<String> {

	@Override
	public String comoSeparar(Prevencao prevencao) {
		return prevencao.getEndereco().getEstado();
	}

	@Override
	public PrevencoesAgrupadas comoAgrupar() {
		return new PrevencaoAgrupadaPorRegiao();
	}

}
