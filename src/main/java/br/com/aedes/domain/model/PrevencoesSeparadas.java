package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.util.Assert;

/**
 * Encapsula um conjunto de prevenções separadas por mês
 * @author guilherme
 *
 */
public abstract class PrevencoesSeparadas {
	private List<Prevencao> prevencoes;
	
	public PrevencoesSeparadas(List<Prevencao> prevencoes) {
		this.validaPrevencoes(prevencoes);
		this.prevencoes = prevencoes;
	}
	
	public PrevencoesSeparadas() {
		this.prevencoes = new ArrayList<>();
	}
	
	private void validaPrevencoes(List<Prevencao> prevencoes) {
		Assert.isTrue(prevencoes != null && !prevencoes.isEmpty());
	}
	
	
	public boolean estaVazio() {
		return this.prevencoes.isEmpty();
	}
	
	/**
	 * Adiciona prevenção a lista
	 * 
	 * @param prevencao
	 * @throws Lança
	 *             exceção caso a exceção não seja do mesmo mês correto
	 */
	public void add(Prevencao prevencao) {
		this.prevencoes.add(prevencao);
	}
	
	public List<Prevencao> getLista() {
		return this.prevencoes;
	}
	
}
