package br.com.aedes.domain.model;

import java.util.List;
import java.util.Map;

/**
 * Organiza as prevenções por determinado critério
 * @author guilherme
 *
 */
public interface SeparadorTemplate {
	/**
	 * 
	 * @param prevencoes
	 * @return
	 */
	public Map<?, PrevencoesSeparadas> separar(List<Prevencao> prevencoes);
	
}
