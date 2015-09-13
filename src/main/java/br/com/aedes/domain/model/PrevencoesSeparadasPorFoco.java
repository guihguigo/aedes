package br.com.aedes.domain.model;

import java.util.List;

import lombok.Getter;

import org.springframework.util.Assert;

public class PrevencoesSeparadasPorFoco extends PrevencoesSeparadas implements
		Comparable<PrevencoesSeparadasPorFoco> {
	@Getter
	private Integer codigo;

	public PrevencoesSeparadasPorFoco(Integer codigo) {
		this.validaNome(codigo);
		this.codigo = codigo;
	}

	public PrevencoesSeparadasPorFoco(Integer codigo, List<Prevencao> prevencoes) {
		this.validaNome(codigo);
		Assert.isTrue(prevencoes != null && prevencoes.isEmpty());

		this.codigo = codigo;
	}

	public void validaNome(Integer nome) {
		Assert.notNull(nome);
	}

	@Override
	public void add(Prevencao prevencao) {
		Assert.isTrue((prevencao != null)
				&& this.codigo.equals(prevencao.getId().getFoco().getCodigo()));
		
		super.add(prevencao);
	}

	@Override
	public int compareTo(PrevencoesSeparadasPorFoco o) {
		return this.codigo.compareTo(o.codigo);
	}

}
