package br.com.aedes.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PercentualDTO {
	private String chave;
	private String descricao;
	private Double emDia;
	private Double atrasada;
}
