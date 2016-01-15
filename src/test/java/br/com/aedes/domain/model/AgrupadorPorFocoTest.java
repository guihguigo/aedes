package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import br.com.aedes.ApplicationTest;
import br.com.aedes.compose.Compose;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;

public class AgrupadorPorFocoTest extends ApplicationTest {

	@Autowired
	@Qualifier("agrupadorPorFoco")
	private AgrupadorTemplate<Integer> agrupador;
	
	@Test
	public void separar$todosOsFocos() {
		List<Prevencao> prevencoes = this.constuirPrevencoesPorFoco();
		
		Map<Integer, Grupo> prevencoesAgrupadas = agrupador.agrupar(prevencoes);
		
		this.testarPrevencoesAgrupadas(prevencoesAgrupadas);
	}
	
	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesNull() {
		agrupador.agrupar(null);
	}

	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesIsEmpty() {
		agrupador.agrupar(new ArrayList<Prevencao>());
	}
	
	private List<Prevencao> constuirPrevencoesPorFoco() {
		List<Prevencao> prevencoes = new ArrayList<>();
		
		for (int i = 1; i <= 15; i++) {
			Foco foco = Compose.foco(i).build();
			Prevencao prevencao1 = Compose.prevencao(true, foco).build();
			Prevencao prevencao2 = Compose.prevencao(true, foco).build();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}
			
		return prevencoes;
	}
	
	private void testarPrevencoesAgrupadas(Map<Integer, Grupo> prevencoesAgrupadas) {
		Assert.assertThat(15, Matchers.is(prevencoesAgrupadas.size()));
		
		for (Integer key : prevencoesAgrupadas.keySet()) {
			PrevencoesAgrupadas grupo = (PrevencoesAgrupadas) prevencoesAgrupadas.get(key);
			
			Assert.assertThat(grupo.getGrupo(), Matchers.hasSize(2));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(0).getId().getFoco().getCodigo()));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(1).getId().getFoco().getCodigo()));
		}
		
	}

 }
