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
	
	public PrevencoesSeparadasPorMes(Integer mes, List<Prevencao> prevencoes) {
		this.prevencoes = prevencoes;
	}
	
	public PrevencoesSeparadasPorMes(Integer mes) {
		if (mes < 0 || mes > 11)
			throw new IllegalStateException("Mês inválido");
		
		this.prevencoes = new ArrayList<>();
	}

	@Override
	public int compareTo(PrevencoesSeparadasPorMes o) {
		return this.mes.compareTo(o.mes);
	}
	
	public boolean estaVazio() {
		return this.prevencoes.isEmpty();
	}
	
	/**
	 * Adiciona prevenção a lista
	 * @param prevencao
	 * @throws Lança exceção caso a exceção não seja do mesmo mês correto
	 */
	public void add(Prevencao prevencao) {
		if (mes != null && !prevencao.getMesDataPrazo().equals(mes))
			throw new RuntimeException("Prevenção não é do mês " + this.mes);
		
		this.prevencoes.add(prevencao);
	}
	
	public List<Prevencao> getLista() {
		return this.prevencoes;
	}
	
}
