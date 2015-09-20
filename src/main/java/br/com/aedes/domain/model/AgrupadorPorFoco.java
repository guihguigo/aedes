package br.com.aedes.domain.model;

import org.springframework.stereotype.Component;

@Component
public class AgrupadorPorFoco extends AgrupadorTemplate<Integer>{

	@Override
	public Integer comoSeparar(Prevencao prevencao) {
		return prevencao.getId().getFoco().getCodigo();
	}

	@Override
	public PrevencoesAgrupadas criarPrevencoesSeparadas(Integer codigo) {
		return new PrevencoesAgrupadasPorFoco(codigo);
	}

}
