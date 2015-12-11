package br.com.aedes.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PercentualMesDTO {
	private String mes;
	private Double emDia;
	private Double atrasada;
}
