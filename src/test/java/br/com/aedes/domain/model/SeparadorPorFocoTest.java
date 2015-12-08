package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;
import br.com.aedes.builder.PrevencaoBuilder;
import br.com.aedes.compose.Compose;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class SeparadorPorFocoTest {

	@Autowired
	@Qualifier("agrupadorPorFoco")
	private AgrupadorTemplate<Integer> agrupador;
	
	@Test
	public void separar$todosOsFocos() {
		List<Prevencao> prevencoes = this.constuirPrevencoesPorFoco();
		
		Map<Integer, PrevencoesAgrupadas> prevencoesAgrupadas = agrupador.separar(prevencoes);
		
		this.testarPrevencoesAgrupadas(prevencoesAgrupadas);
	}
	
	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesNull() {
		agrupador.separar(null);
	}

	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesIsEmpty() {
		agrupador.separar(new ArrayList<Prevencao>());
	}
	
	private List<Prevencao> constuirPrevencoesPorFoco() {
		List<Prevencao> prevencoes = new ArrayList<>();
		
		for (int i = 1; i <= 15; i++) {
			Foco foco = Compose.foco(i).build();
			Prevencao prevencao1 = Compose.prevencao(true, foco).build();
			Prevencao prevencao2 = new PrevencaoBuilder().comoCodigoFoco(i).constroi();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}
			
		return prevencoes;
	}
	
	private void testarPrevencoesAgrupadas(Map<Integer, PrevencoesAgrupadas> prevencoesAgrupadas) {
		Assert.assertThat(15, Matchers.is(prevencoesAgrupadas.size()));
		
		for (Integer key : prevencoesAgrupadas.keySet()) {
			PrevencoesAgrupadasPorFoco grupo = (PrevencoesAgrupadasPorFoco) prevencoesAgrupadas.get(key);
			
			Assert.assertThat(grupo.getGrupo(), Matchers.hasSize(2));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(0).getId().getFoco().getCodigo()));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(1).getId().getFoco().getCodigo()));
		}
		
	}

 }
