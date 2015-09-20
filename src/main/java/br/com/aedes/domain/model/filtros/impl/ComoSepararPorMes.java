package br.com.aedes.domain.model.filtros.impl;

import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.domain.model.filtros.ComoSepararStrategy;

public class ComoSepararPorMes implements ComoSepararStrategy<Integer>{

	@Override
	public Integer comoSeparar(Prevencao prevencao) {
		return prevencao.getMesDataPrazo();
	}

}
