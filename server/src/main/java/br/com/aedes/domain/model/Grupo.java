package br.com.aedes.domain.model;

import java.util.List;

import br.com.aedes.domain.entity.Prevencao;

/**
 * Encapsula um conjunto de prevenções separadas por mês
 * @author guilherme
 *
 */
public interface Grupo {

	public boolean estaVazio();
	
	/**
	 * Adiciona prevenção a lista
	 * 
	 * @param prevencao
	 * @throws Lança
	 *             exceção caso a exceção não seja do mesmo mês correto
	 */
	public void add(Prevencao prevencao);
	
	public List<Prevencao> getGrupo();
	
	public String getChave();
	
	public String getDescricao();
}
