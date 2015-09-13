package br.com.aedes.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Setter;

@Entity
public class Endereco {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Setter
	private Long id;
	
	@Setter
	private String bairro;
	
	@Setter
	private String cidade;
	
	@Setter
	private String estado;

	public Endereco(String bairro, String cidade, String estado) {
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
	}

	public Endereco() {
	}
	
	@Override
    public String toString() {
        return "Endereco{" + "bairro=" + bairro + ", cidade=" + cidade + ", estado=" + estado + '}';
    }
}
