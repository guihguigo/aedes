package br.com.aedes.dto;

import br.com.aedes.domain.model.Endereco;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EnderecoDTO {

	public EnderecoDTO(Endereco endereco) {
		this.id = endereco.getId();
		this.bairro = endereco.getBairro();
		this.cidade = endereco.getCidade();
		this.estado = endereco.getEstado();
	}

	private Long id;

	private String bairro;

	private String cidade;

	private String estado;
}
