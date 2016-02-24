package br.com.aedes.domain.model;

public class PrevencaoAgrupadaPorFoco extends PrevencoesAgrupadas{

	@Override
	public String getChave() {
		return this.getGrupo().get(0).getId().getFoco().getCodigo().toString();
	}

	@Override
	public String getDescricao() {
		return this.getGrupo().get(0).getId().getFoco().getNome();
	}
}
