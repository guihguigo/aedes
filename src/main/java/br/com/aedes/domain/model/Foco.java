package br.com.aedes.domain.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;

@Entity
public class Foco implements Comparable<Foco> {
	@Id
	private Integer codigo;
	@Getter
	private String nome;
	private String comoLimpar;

	public Foco(Integer codigo, String nome, String comoLimpar) {
		this.codigo = codigo;
		this.nome = nome;
		this.comoLimpar = comoLimpar;
	}

	public Foco() {}

	@Override
	public String toString() {
		return "Foco{" + "codigo=" + codigo + ", nome=" + nome
				+ ", comoLispar=" + comoLimpar + '}';
	}

	@Override
	public int compareTo(Foco o) {
		return this.nome.compareTo(o.nome);
	}
}
