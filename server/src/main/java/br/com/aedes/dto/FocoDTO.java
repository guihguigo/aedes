package br.com.aedes.dto;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FocoDTO {
	
	@NotNull
	private Integer codigo;
	
	@NotNull
	private String nome;
	
	private String comoLimpar;
	
	private String foto;
	
	private Integer periodicidade;
}
