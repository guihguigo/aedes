package br.com.aedes.domain.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Builder
@ToString
@Getter @Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Foco implements Comparable<Foco> {
	
	@Id
	private Integer codigo;
	
	private String nome;
	
	private String comoLimpar;
	
	private String foto;
	
	private Integer periodicidade;

	@Override
	public int compareTo(Foco o) {
		return this.nome.compareTo(o.nome);
	}
}
