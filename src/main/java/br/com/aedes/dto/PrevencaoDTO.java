package br.com.aedes.dto;

import java.util.Date;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PrevencaoDTO {
	@NotNull
	private String codigoCelular;

	@NotNull
	private FocoDTO foco;

	@NotNull
	private EnderecoDTO endereco;
	
	@NotNull
	private Date dataCriacao;
	
	@NotNull
	private Date dataPrazo;
    
	private Date dataEfetuada;
}
