package br.com.aedes.domain.model;

import java.util.List;

import org.springframework.util.Assert;

public class PrevencoesSeparadasPorFoco extends PrevencoesSeparadas implements
		Comparable<PrevencoesSeparadasPorFoco> {
	private String nome;

	public PrevencoesSeparadasPorFoco(String nome) {
		this.validaNome(nome);
		this.nome = nome;
	}

	public PrevencoesSeparadasPorFoco(String nome, List<Prevencao> prevencoes) {
		this.validaNome(nome);
		Assert.isTrue(prevencoes != null && prevencoes.isEmpty());

		this.nome = nome;
	}

	public void validaNome(String nome) {
		Assert.notNull(nome);
	}

	@Override
	public void add(Prevencao prevencao) {
		Assert.isTrue((prevencao != null)
				&& this.nome.equals(prevencao.getId().getFoco().getNome()));
		
		super.add(prevencao);
	}

	@Override
	public int compareTo(PrevencoesSeparadasPorFoco o) {
		return this.nome.compareTo(o.nome);
	}

}
