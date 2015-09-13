package br.com.aedes.builder;

import br.com.aedes.domain.model.Endereco;

public class EnderecoBuilder {
	private Endereco endereco;
	
	public EnderecoBuilder() {
		this.endereco = new Endereco();
	}
	
	public EnderecoBuilder comId(Long id) {
		this.endereco.setId(id);
		
		return this;
	}
	
	public EnderecoBuilder comBairro(String bairro) {
		this.endereco.setBairro(bairro);
		
		return this;
	}
	
	public EnderecoBuilder comCidade(String cidade) {
		this.endereco.setCidade(cidade);
		
		return this;
	}

	public EnderecoBuilder comEstado(String estado) {
		this.endereco.setEstado(estado);
		
		return this;
	}
	
	public Endereco constroi() {
		return this.endereco;
	}
	
	public Endereco constroiPadrao() {
		this.endereco.setId(1L);
		this.endereco.setBairro("Jardim Quietude");
		this.endereco.setCidade("Praia Grande");
		this.endereco.setEstado("São Paulo");
		
		return this.endereco;
	}
	
}
