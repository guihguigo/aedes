package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;

/**
 * 
 * @author guilherme
 *
 */
public class PrevencoesAgrupadasPorMes implements PrevencoesAgrupadas, Comparable<PrevencoesAgrupadasPorMes> {
	private List<Prevencao> prevencoes;
	
	@Getter
	private Integer mes;

	public PrevencoesAgrupadasPorMes(Integer mes) {
		if (this.mesENull(mes))
			throw new IllegalStateException("Argumento com estado inválido.");
		
		this.mes = mes;
		this.prevencoes = new ArrayList<>();
	}

	public PrevencoesAgrupadasPorMes(Integer mes, List<Prevencao> prevencoes) {
		if (this.mesENull(mes) || this.prevencoesENullOuVazio(prevencoes))
			throw new IllegalStateException("Argumentos com estados inválidos.");
		
		this.mes = mes;
		this.prevencoes = prevencoes;
	}

	private boolean prevencoesENullOuVazio(List<Prevencao> prevencoes) {
		return prevencoes == null || prevencoes.isEmpty();
	}

	private boolean mesENull(Integer mes) {
		return mes == null;
	}
	
	/**
	 * Por default a ordem natural dessa classe é por mês em ordem crescente.
	 */
	@Override
	public int compareTo(PrevencoesAgrupadasPorMes o) {
		return this.mes.compareTo(o.getMes());
	}

	@Override
	public void add(Prevencao prevencao) {
		if (prevencao == null || !fazParteGrupo(prevencao))
			throw new IllegalArgumentException("Está prevenção não faz parte deste grupo.");
			
		this.prevencoes.add(prevencao);
	}

	public boolean fazParteGrupo(Prevencao prevencao) {
		return this.mes.equals(prevencao.getMesDataPrazo());
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
