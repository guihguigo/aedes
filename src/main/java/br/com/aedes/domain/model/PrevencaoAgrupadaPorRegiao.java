package br.com.aedes.domain.model;

public class PrevencaoAgrupadaPorRegiao extends PrevencoesAgrupadas {

	@Override
	public String getChave() {
		return this.getGrupo().get(0).getEndereco().getEstado();
	}

	@Override
	public String getDescricao() {
		return this.getChave();
	}
}
