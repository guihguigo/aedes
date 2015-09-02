package br.com.aedes.domain.model;

import java.util.List;

public interface PrevencoesSeparadas {
	public void add(Prevencao prevencao);
	
	public List<Prevencao> getLista();
}
