package br.com.aedes.domain.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
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
public class PrevencaoId implements Serializable {
	private static final long serialVersionUID = 3667910347363573384L;

	@Setter
	private Long codigoCelular;

	@OneToOne
	@JoinColumn(name = "foco_codigo")
	@Getter
	private Foco foco;

	@Temporal(TemporalType.DATE)
	private Date dataCriacao;
}
