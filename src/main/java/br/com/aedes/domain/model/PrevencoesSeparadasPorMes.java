package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Encapsula um conjunto de prevenções separadas por mês
 * @author guilherme
 *
 */
public class PrevencoesSeparadasPorMes implements PrevencoesSeparadas, Comparable<PrevencoesSeparadasPorMes>{
	private Integer mes;
	private List<Prevencao> prevencoes;
	
	public PrevencoesSeparadasPorMes(List<Prevencao> prevencoes) {
		this.validaPrevencoes(prevencoes);
		this.prevencoes = prevencoes;
		this.mes = prevencoes.get(0).getMesDataPrazo();
	}
	
	public PrevencoesSeparadasPorMes() {
		this.prevencoes = new ArrayList<>();
	}
	
	private void validaPrevencoes(List<Prevencao> prevencoes) {
		if (prevencoes == null || prevencoes.isEmpty())
			throw new IllegalStateException("Prevenções vazia ou null");
	}
	
	@Override
	public int compareTo(PrevencoesSeparadasPorMes o) {
		return this.mes.compareTo(o.mes);
	}
	
	@Override
	public boolean estaVazio() {
		return this.prevencoes.isEmpty();
	}
	
	/**
	 * Adiciona prevenção a lista
	 * @param prevencao
	 * @throws Lança exceção caso a exceção não seja do mesmo mês correto
	 */
	@Override
	public void add(Prevencao prevencao) {
		if (this.mes != null && !this.mes.equals(prevencao.getMesDataPrazo()))
			throw new RuntimeException("Prevenção não é do mês " + this.mes);
		
		this.prevencoes.add(prevencao);
	}
	
	@Override
	public List<Prevencao> getLista() {
		return this.prevencoes;
	}
	
}
