package br.com.aedes.domain.model;

public class PrevencaoAgrupadaPorCidade extends PrevencoesAgrupadas {

	@Override
	public String getChave() {
		return this.getGrupo().get(0).getEndereco().getCidade();
	}

	@Override
	public String getDescricao() {
		return this.getChave();
	}
}
