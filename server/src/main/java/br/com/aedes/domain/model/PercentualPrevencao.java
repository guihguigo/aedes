package br.com.aedes.domain.model;

import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;

import br.com.aedes.domain.entity.Prevencao;
import lombok.Getter;

public class PercentualPrevencao implements Percentual {
	@Getter
	private String chave;
	
	@Getter
	private String descricao;
	
	@Getter
	private double emDia;

	@Getter
	private double atrasada;

	public PercentualPrevencao(Grupo agrupadas) {
		if (agrupadas == null)
			throw new IllegalStateException(Grupo.class
					+ " em estado inválido");
		
		this.chave = agrupadas.getChave();
		this.descricao = agrupadas.getDescricao();
		
		this.calcular(agrupadas.getGrupo());
	}

	/**
	 * Calcula o percentual da lista de prevenções
	 * @param prevencoes 
	 */
	private void calcular(List<Prevencao> prevencoes) {
		double emDia = 0;
		double atrasada = 0;
		
		for (Prevencao prevencao : prevencoes) {
			if (prevencao.isAtrasada())
				atrasada++;
			else
				emDia++;
		}
		
		this.emDia = emDia != 0 ? this.formatarPercentual((emDia * 100) / prevencoes.size()) : 0;
		this.atrasada = atrasada != 0 ? this.formatarPercentual((atrasada * 100) / prevencoes.size()) : 0;
	}

	/**
	 * Formata o percentual
	 * @param percentual
	 * @return
	 */
	private double formatarPercentual(double percentual) {
		NumberFormat format = NumberFormat.getInstance(Locale.US);
		format.setMaximumFractionDigits(2);
		
		return Double.parseDouble(format.format(percentual));
	}
}