package br.com.aedes.domain.model;

public interface Percentual {
    public void setPercentualAtrasada(double percentAtualrasada);

    public void setPercentualEmDia(double percentualEmDia);

    public double getPercentualAtrasada();

    public double getPercentualEmDia();
    
    public String getNomeMes();
    
    public void setNomeMes(String nomeFoco);
    
    public String getNomeFoco();
    
    public void setNomeFoco(String nomeFoco);
    
    public Integer getMes();
    
    public int tamanho();
}
