package br.com.aedes.domain.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Embeddable
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class PrevencaoId implements Serializable {
	private static final long serialVersionUID = 3667910347363573384L;

	@Setter
	private String codigoCelular;

	@OneToOne
	@JoinColumn(name = "foco_codigo")
	@Getter
	private Foco foco;

	@Temporal(TemporalType.TIMESTAMP)
	private Date dataCriacao;
}
