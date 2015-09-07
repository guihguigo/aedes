package br.com.aedes.domain.model;

import java.util.List;

import org.springframework.util.Assert;

import lombok.Getter;

public class PrevencoesSeparadasPorMes extends PrevencoesSeparadas implements
		Comparable<PrevencoesSeparadasPorMes> {
	@Getter
	private Integer mes;

	public PrevencoesSeparadasPorMes(Integer mes) {
		this.mes = mes;
	}

	public PrevencoesSeparadasPorMes(Integer mes, List<Prevencao> prevencoes) {
		super(prevencoes);
		this.mes = mes;
	}

	/**
	 * Ordena por mês em ordem crescente
	 */
	@Override
	public int compareTo(PrevencoesSeparadasPorMes o) {
		return this.mes.compareTo(o.getMes());
	}

	@Override
	public void add(Prevencao prevencao) {
		Assert.isTrue(prevencao != null
				&& this.mes.equals(prevencao.getMesDataPrazo()));

		super.add(prevencao);
	}

}
