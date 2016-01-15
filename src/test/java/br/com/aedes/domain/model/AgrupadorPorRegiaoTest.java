package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;

import br.com.aedes.ApplicationTest;
import br.com.aedes.domain.entity.Endereco;
import br.com.aedes.domain.entity.Prevencao;

public class AgrupadorPorRegiaoTest extends ApplicationTest {

	@Test
	public void agruparPorRegiao() {
		AgrupadorTemplate<String> agrupador = new AgrupadorPorRegiao();
		Map<String, Grupo> prevencoesAgrupadas = agrupador.agrupar(this.constuirPrevencoesPorRegiao());
		
		this.testarPrevencoesAgrupadasPorRegiaof(prevencoesAgrupadas);
	}
	
	private void testarPrevencoesAgrupadasPorRegiaof(Map<String, Grupo> prevencoesAgrupadas) {
		for (String key : prevencoesAgrupadas.keySet()) {
			Grupo grupo =  prevencoesAgrupadas.get(key);
				
			Assert.assertThat(grupo.getGrupo(), Matchers.hasSize(10));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(0).getEndereco().getEstado()));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(1).getEndereco().getEstado()));
		}
	}
	
	private List<Prevencao> constuirPrevencoesPorRegiao() {
		List<Prevencao> prevencoes = new ArrayList<>();
		
		Endereco saoPaulo = Endereco.builder().estado("São Paulo").build();
		Endereco rioDeJaneiro = Endereco.builder().estado("Rio de Janeiro").build();
		
		for (int i = 1; i <= 10; i++) {
			Prevencao prevencao1 = Prevencao.builder().endereco(saoPaulo).build();
			Prevencao prevencao2 = Prevencao.builder().endereco(rioDeJaneiro).build();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}
		
		return prevencoes;
	}
}
