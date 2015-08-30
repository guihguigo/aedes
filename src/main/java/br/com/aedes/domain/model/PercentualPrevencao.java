package br.com.aedes.domain.model;

import java.util.List;

public class PercentualPrevencao implements Percentual{
	private List<Prevencao> prevencoes;
	private long emDia;
	private long atrasada;
	
	public PercentualPrevencao(List<Prevencao> prevencoes) {
		this.prevencoes = prevencoes;
		this.calcular();
	}
	
	private void calcular() {
        for (Prevencao prevencao : prevencoes) {
            if (prevencao.isAtrasada()) 
                atrasada++;
            else 
                emDia++;
        }
        
        this.emDia = (this.emDia * 100) / prevencoes.size();
        this.atrasada = (this.atrasada * 100) / prevencoes.size();
	}
	
	@Override
	public void setPercentualAtrasada(double percentAtualrasada) {
		
	}

	@Override
	public void setPercentualEmDia(double percentualEmDia) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public double getPercentualAtrasada() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double getPercentualEmDia() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String getNomeMes() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setNomeMes(String nomeFoco) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getNomeFoco() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setNomeFoco(String nomeFoco) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Integer getMes() {
		return 1;
	}
	
}