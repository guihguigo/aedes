package br.com.aedes.domain.model;

public interface Percentual {
    public int tamanho();
    
    public double getAtrasada();
    
    public double getEmDia();

	public Prevencao getPrevencao(int indice);
    
}
