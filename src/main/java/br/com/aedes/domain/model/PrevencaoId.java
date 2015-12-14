package br.com.aedes.domain.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Embeddable
@Getter @Setter
@ToString
public class PrevencaoId implements Serializable{
	private static final long serialVersionUID = 3667910347363573384L;
	
	@Setter
	private Long codigoCelular;
    
	@Getter
	@OneToOne
	@JoinColumn(name = "foco_codigo")
	private Foco foco;

	@Temporal(TemporalType.DATE)
    private Date dataCriacao;
}
