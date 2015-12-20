package br.com.aedes.dto;

import java.util.Date;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonFormat;

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
	
	@NotNull @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ", timezone = "UTC")
	private Date dataCriacao;
	
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ", timezone = "UTC")
	private Date dataPrazo;
	
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ", timezone = "UTC")
	private Date dataEfetuada;
}
