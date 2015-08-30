package br.com.aedes.domain.model;

public class PercentualPrevencaoFacotory implements
		Factory<Percentual> {

	@Override
	public Percentual constroi(TipoPercentualPrevencao tipo) {
		switch (tipo) {
		case PERCENTUAL_PREVENCAO_POR_MES:
			break;
		}
		return null;
	}

}
