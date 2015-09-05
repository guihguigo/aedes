package br.com.aedes.domain.model;

import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;

import lombok.Getter;

public class PercentualPrevencao implements Percentual {
	private List<Prevencao> prevencoes;
	
	@Getter
	private double emDia;

	@Getter
	private double atrasada;

	public PercentualPrevencao(PrevencoesSeparadas prevencoes) {
		if (prevencoes == null || prevencoes.getLista() == null
				|| prevencoes.getLista().isEmpty())
			throw new IllegalStateException(PrevencoesSeparadas.class
					+ " em estado inválido");

		this.prevencoes = prevencoes.getLista();
		this.calcular();
	}

	/**
	 * Calcula o percentual da lista de prevenções
	 */
	private void calcular() {
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
	
	/**
	 * Retorna o tamanho
	 */
	@Override
	public int tamanho() {
		return this.prevencoes.size();
	}
	
	@Override
	public Prevencao getPrevencao(int indice) {
		return this.prevencoes.get(indice);
	}
 
}