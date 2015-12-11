package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Esta classe representa um conjunto de prevenções separadas por código do {@link Foco} da {@link Prevencao}
 * @author guilherme
 *
 */
public abstract class PrevencoesAgrupadas implements Grupo {
	
	private List<Prevencao> prevencoes;
	
	public PrevencoesAgrupadas() {
		this.prevencoes = new ArrayList<>();
	}

	public PrevencoesAgrupadas(List<Prevencao> prevencoes) {
		if (this.prevecoesENull(prevencoes))
			throw new IllegalStateException("Argumentos com estados inválidos.");
			
		this.prevencoes = prevencoes;
	}

	private boolean prevecoesENull(List<Prevencao> prevencoes) {
		return (prevencoes == null);
	}

	@Override
	public void add(Prevencao prevencao) {
		if(prevencao == null)
			throw new IllegalArgumentException("Esta prevenção não deve ser null.");
		
		this.prevencoes.add(prevencao);
	}

	@Override
	public boolean estaVazio() {
		return this.prevencoes.isEmpty();
	}

	@Override
	public List<Prevencao> getGrupo() {
		return new ArrayList<>(this.prevencoes);
	}
}
