package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;

/**
 * Esta classe representa um conjunto de prevenções separadas por código do {@link Foco} da {@link Prevencao}
 * @author guilherme
 *
 */
public class PrevencoesAgrupadasPorFoco implements PrevencoesAgrupadas,
		Comparable<PrevencoesAgrupadasPorFoco> {
	
	private List<Prevencao> prevencoes;
	
	@Getter
	private Integer codigoFoco;

	public PrevencoesAgrupadasPorFoco(Integer codigo) {
		if (this.codigoFocoENull(codigo))
			throw new IllegalStateException("Argumento com estado inválido.");
		
		this.codigoFoco = codigo;
		this.prevencoes = new ArrayList<>();
	}

	public PrevencoesAgrupadasPorFoco(Integer codigoFoco, List<Prevencao> prevencoes) {
		if (this.codigoFocoENull(codigoFoco) || this.prevecoesENullOuVazio(prevencoes))
			throw new IllegalStateException("Argumentos com estados inválidos.");
			
		this.prevencoes = prevencoes;
		this.codigoFoco = codigoFoco;
	}

	private boolean prevecoesENullOuVazio(List<Prevencao> prevencoes) {
		return (prevencoes == null || prevencoes.isEmpty());
	}

	private boolean codigoFocoENull(Integer codigoFoco) {
		return codigoFoco == null;
	}

	@Override
	public void add(Prevencao prevencao) {
		if(prevencao == null || !this.fazParteGrupo(prevencao))
			throw new IllegalArgumentException("Esta prevenção não pertence ao grupo.");
		
		this.prevencoes.add(prevencao);
	}

	public boolean fazParteGrupo(Prevencao prevencao) {
		return this.codigoFoco.equals(prevencao.getId().getFoco().getCodigo());
	}

	@Override
	public int compareTo(PrevencoesAgrupadasPorFoco o) {
		return this.codigoFoco.compareTo(o.codigoFoco);
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
