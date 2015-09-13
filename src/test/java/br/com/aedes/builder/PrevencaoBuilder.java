package br.com.aedes.builder;

import java.util.Calendar;
import java.util.Date;

import br.com.aedes.domain.model.Endereco;
import br.com.aedes.domain.model.Foco;
import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.domain.model.PrevencaoId;

public class PrevencaoBuilder {
	private Prevencao prevencao;
	private PrevencaoId prevencaoId;
	private Foco foco;
	private Endereco endereco;
	private FocoBuilder focoBuilder;
	private EnderecoBuilder enderecoBuilder;
	
	public PrevencaoBuilder() {
		prevencao = new Prevencao();
		prevencaoId = new PrevencaoId();
		focoBuilder = new FocoBuilder();
		enderecoBuilder = new EnderecoBuilder();
		
	}
	
	public PrevencaoBuilder comCodigoCelular(Long codigoCelular) {
		this.prevencaoId.setCodigoCelular(codigoCelular);
		
		return this;
	}
	
	public PrevencaoBuilder comDataCriacao(Date dataCriacao) {
		this.prevencaoId.setDataCriacao(dataCriacao);
		
		return this;
	}
	
	/**
	 * Com {@link Foco} setado com valores padrões por {@link FocoBuilder#constroiPadrao()}
	 */
	public PrevencaoBuilder comFoco() {
		this.foco = this.focoBuilder.constroiPadrao();
		
		return this;
	}
	
	public PrevencaoBuilder comFoco(Foco foco) {
		this.foco = foco;
		
		return this;
	}
	
	public PrevencaoBuilder comNomeFoco(String nome) {
		this.focoBuilder.comNome(nome);
		
		return this;
	}
	
	public PrevencaoBuilder comoCodigoFoco(Integer codigoFoco) {
		this.focoBuilder.comCodigo(codigoFoco);
		
		return this;
	}
	
	public PrevencaoBuilder comComoLimparFoco(String comoLimpar) {
		this.focoBuilder.comComoLimpar(comoLimpar);
		
		return this;
	}
	
	/**
	 * Com {@link Endereco} setador com valores padrão por 
	 * @return
	 */
	public PrevencaoBuilder comEndereco() {
		this.endereco = this.enderecoBuilder.constroiPadrao();
		
		return this;
	}
	
	public PrevencaoBuilder comEnderecoId(Long id) {
		this.enderecoBuilder.comId(id);
		
		return this;
	}
	
	public PrevencaoBuilder comEnderecoBairro(String bairro) {
		this.enderecoBuilder.comBairro(bairro);
		
		return this;
	}
	
	public PrevencaoBuilder comEnderecoCidade(String cidade) {
		this.endereco.setCidade(cidade);
		
		return this;
	}
	
	public PrevencaoBuilder comEstado(String estado) {
		this.endereco.setEstado(estado);
		
		return this;
	}
	
	public PrevencaoBuilder comDataEfetuada(Date dataEfetuada) {
		this.prevencao.setDataEfetuada(dataEfetuada);
		
		return this;
	}
	
	public PrevencaoBuilder comDataPrazo(Date dataPrazo) {
		this.prevencao.setDataPrazo(dataPrazo);
		
		return this;
	}
	
	public Prevencao constroi() {
		this.prevencaoId.setFoco(focoBuilder.constroi());
		this.prevencao.setId(this.prevencaoId);
		this.prevencao.setEndereco(enderecoBuilder.constroi());
		return this.prevencao;
	}
	
	public Prevencao constroiPadrao(boolean isEmDia) {
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MONTH, -1);
		Date criacao = calendar.getTime();
		
		calendar.add(Calendar.DAY_OF_MONTH, 20);
		Date prazo = calendar.getTime();
		
		this.prevencaoId.setFoco(this.focoBuilder.constroiPadrao());
		this.prevencaoId.setCodigoCelular(123L);
		this.prevencaoId.setDataCriacao(criacao);
		this.prevencao.setDataPrazo(prazo);
		this.prevencao.setDataEfetuada(isEmDia ? new Date() : null);
		this.prevencao.setEndereco(this.enderecoBuilder.constroiPadrao());
		
		return this.prevencao;
	}
    
}
