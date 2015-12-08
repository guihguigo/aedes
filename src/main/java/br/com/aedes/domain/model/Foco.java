package br.com.aedes.domain.model;

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
@EqualsAndHashCode
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Foco implements Comparable<Foco> {
	@Id
	@Setter @Getter
	private Integer codigo;
	
	@Getter @Setter
	private String nome;
	
	@Setter
	private String comoLimpar;

	@Override
	public int compareTo(Foco o) {
		return this.nome.compareTo(o.nome);
	}
}
