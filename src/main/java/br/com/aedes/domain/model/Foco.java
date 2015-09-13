package br.com.aedes.domain.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
public class Foco implements Comparable<Foco> {
	@Id
	@Setter @Getter
	private Integer codigo;
	
	@Getter @Setter
	private String nome;
	
	@Setter
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
