package br.com.aedes.domain.model;

import java.util.Arrays;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class PercentualPrevencaoTestAux {
	private Prevencao prevencao1;
	private Prevencao prevencao2;

	@Before
	public void before() {
		prevencao1 = Mockito.mock(Prevencao.class);
		prevencao2 = Mockito.mock(Prevencao.class);

		Mockito.when(prevencao1.isAtrasada()).thenReturn(false);
		Mockito.when(prevencao2.isAtrasada()).thenReturn(true);
	}

	@Test
	public void testCalcular$porcentagemRedonda() {
		PrevencoesSeparadas prevencoesSeparadasPorMes = new PrevencoesSeparadasPorMes(1, 
				Arrays.asList(prevencao1, prevencao2));
		Percentual percentual = new PercentualPrevencao(
				prevencoesSeparadasPorMes);

		Assert.assertThat(percentual.getEmDia(), Matchers.is(50.0));
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(50.0));

		Mockito.verify(prevencao1).isAtrasada();
		Mockito.verify(prevencao2).isAtrasada();
	}

	@Test
	public void testCalcular$porcentagemQuebrada() {
		Prevencao prevencao3 = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao3.isAtrasada()).thenReturn(false);
		
		PrevencoesSeparadas prevencoesSeparadasPorMes = new PrevencoesSeparadasPorMes(1, 
				Arrays.asList(prevencao1, prevencao2, prevencao3));
		Percentual percentual = new PercentualPrevencao(
				prevencoesSeparadasPorMes);

		Assert.assertThat(percentual.getEmDia(), Matchers.is(66.67));
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(33.33));

		Mockito.verify(prevencao1).isAtrasada();
		Mockito.verify(prevencao2).isAtrasada();
		Mockito.verify(prevencao3).isAtrasada();
	}

	@Test
	public void TestCalcular$todasPorcentagensAtrasadas() {
		Prevencao prevencao3 = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao3.isAtrasada()).thenReturn(true);
		
		PrevencoesSeparadas prevencoesSeparadasPorMes = new PrevencoesSeparadasPorMes(1, 
				Arrays.asList(prevencao2, prevencao3));
		Percentual percentual = new PercentualPrevencao(
				prevencoesSeparadasPorMes);
		
		Assert.assertThat(percentual.getEmDia(), Matchers.is(0.0));
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(100.0));
		
		Mockito.verify(prevencao2).isAtrasada();
		Mockito.verify(prevencao3).isAtrasada();
	}
	
	@Test
	public void testCalcular$todasPorcentagensEmDia() {
		Prevencao prevencao3 = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao3.isAtrasada()).thenReturn(false);
		
		PrevencoesSeparadas prevencoesSeparadasPorMes = new PrevencoesSeparadasPorMes(1, 
				Arrays.asList(prevencao1, prevencao3));
		Percentual percentual = new PercentualPrevencao(
				prevencoesSeparadasPorMes);
		
		Assert.assertThat(percentual.getEmDia(), Matchers.is(100.0));
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(0.0));
		
		Mockito.verify(prevencao1).isAtrasada();
		Mockito.verify(prevencao3).isAtrasada();
	}
}