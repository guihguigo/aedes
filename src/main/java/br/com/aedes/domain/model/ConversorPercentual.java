package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.aedes.domain.model.filtros.ComoSepararStrategy;

/**
 * Calcula o percentual de prevenções
 * @author guilherme
 *
 */
@Component
public class ConversorPercentual {
	
	@Autowired
	private Separador separador;
	
	@Autowired
	private PrevencoesSeparadasFactory factory;
	
	public List<Percentual> converterPercentual(List<Prevencao> prevencoes, ComoSepararStrategy<?> comoSepararTemplate, TipoSepararPor tipo) {
		if (prevencoes == null || prevencoes.isEmpty() || separador == null)
			return null;
		
		Map<?, PrevencoesSeparadas> prevencoesSeparadas = this.separador.separar(prevencoes, comoSepararTemplate, tipo);
		
		List<Percentual> percentuais = new ArrayList<>();
		
		// aqui varro o map e adiciono a um set ordenado utilizando lambda
		prevencoesSeparadas.forEach((chave, valor) -> percentuais
				.add(new PercentualPrevencao(valor)));

		return percentuais;
	}
	
}
