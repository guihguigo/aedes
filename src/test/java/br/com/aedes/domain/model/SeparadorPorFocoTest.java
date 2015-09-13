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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class SeparadorPorFocoTest {

	@Autowired
	@Qualifier("separadorPorFoco")
	private SeparadorTemplate separador;
	
	@Test
	public void separar$prevencoesEmTodosOsMeses() {
		List<Prevencao> prevencoes = this.constuirPrevencoesPorFoco();
		
		Map<Integer, PrevencoesSeparadas> prevencoesSeparadas = separador.separar(prevencoes);
		
		this.testarPrevencoesSeparadasPorMes(prevencoesSeparadas);
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void separar$prevencoesNull() {
		separador.separar(null);
	}
	
	@Test
	public void separar$prevencoesIsEmpty() {
		Map<Integer, PrevencoesSeparadas> prevencoesSeparadas = separador.separar(new ArrayList<Prevencao>());
		Assert.assertNotNull(prevencoesSeparadas);
		Assert.assertThat(prevencoesSeparadas.size(), Matchers.is(0));
	}
	
	private void testarPrevencoesSeparadasPorMes(Map<Integer, PrevencoesSeparadas> prevencoesSeparadas) {
		for (Integer key : prevencoesSeparadas.keySet()) {
			PrevencoesSeparadasPorFoco prevencoes = (PrevencoesSeparadasPorFoco) prevencoesSeparadas.get(key);
			
			Assert.assertNotNull(prevencoes);
			Assert.assertThat(prevencoes.getLista(), Matchers.hasSize(2));
			Assert.assertThat(prevencoes.getCodigo(), Matchers.is(prevencoes.getLista().get(0).getId().getFoco().getCodigo()));
			Assert.assertThat(prevencoes.getCodigo(), Matchers.is(prevencoes.getLista().get(1).getId().getFoco().getCodigo()));
		}
	}
	
	private List<Prevencao> constuirPrevencoesPorFoco() {
		List<Prevencao> prevencoes = new ArrayList<>();
		
		for (int i = 1; i <= 15; i++) {
			Prevencao prevencao1 = new PrevencaoBuilder().comoCodigoFoco(i).constroi();
			Prevencao prevencao2 = new PrevencaoBuilder().comoCodigoFoco(i).constroi();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}
			
		return prevencoes;
	}

}
