package br.com.aedes.builder;

import br.com.aedes.domain.model.Foco;

public class FocoBuilder {
	private Foco foco;
	
	public FocoBuilder() {
		this.foco = new Foco();
	}
	
	public FocoBuilder comCodigo(Integer codigo) {
		this.foco.setCodigo(codigo);
		
		return this;
	}
	
	public FocoBuilder comNome(String nome) {
		this.foco.setNome(nome);
		
		return this;
	}
	
	public FocoBuilder comComoLimpar(String comoLimpar) {
		this.foco.setComoLimpar(comoLimpar);
		
		return this;
	}
	
	public Foco constroi() {
		return foco;
	}
	
	public Foco constroiPadrao() {
		this.foco.setCodigo(1);
		this.foco.setNome("Vasos (Flores e Plantas)");
		this.foco.setComoLimpar("Água, esponja e sabão. Depositar areia "
	         +"na vasilha sob o vaso a cada limpeza.");
		
		return foco;
	}
	
}
