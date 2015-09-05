package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;

public class PrevencoesSeparadsPorFoco implements PrevencoesSeparadas {
	private String nome;
	private List<Prevencao> prevencoes;
	
	public PrevencoesSeparadsPorFoco() {
		this.prevencoes = new ArrayList<>();
	}
	
	public PrevencoesSeparadsPorFoco(List<Prevencao> prevencoes) {
		this.validaPrevencoes(prevencoes);
		
		this.prevencoes = prevencoes;
	}
	
	private void validaPrevencoes(List<Prevencao> prevencoes) {
		if (prevencoes == null || prevencoes.isEmpty())
			throw new IllegalStateException("Prevenções vazia ou null");
	}
	
	@Override
	public void add(Prevencao prevencao) {
		if (this.nome != null && !this.nome.equals(prevencao.getId().getFoco().getNome()))
				throw new IllegalStateException("Prevenção não tem o nome: " + this.nome);
		this.prevencoes.add(prevencao);
	}	
	
	@Override
	public List<Prevencao> getLista() {
		return this.prevencoes;
	}

	@Override
	public boolean estaVazio() {
		return this.prevencoes.isEmpty();
	}

}
