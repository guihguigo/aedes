package br.com.aedes.domain.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PercentualPrevencaoFacotory implements Factory<Percentual> {

	@Autowired
	private CalculadorPercentual calculador;

	@Override
	public List<Percentual> constroi(TipoPercentualPrevencao tipo,
			List<Prevencao> prevencoes) {
		Organizador organizador = null;

		switch (tipo) {
		case PERCENTUAL_PREVENCAO_POR_MES:
			organizador = new OrganizarPorMes();
			break;
		}

		return calculador.converterPercentual(organizador, prevencoes);
	}

}
