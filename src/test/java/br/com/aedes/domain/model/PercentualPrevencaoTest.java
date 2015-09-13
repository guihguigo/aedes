package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;
import br.com.aedes.builder.PrevencaoBuilder;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class PercentualPrevencaoTest {

	@Test
	public void testConverterPercentualPorMes$percentualQuebrado() {
		Prevencao prevencaoAtrasada1 = new PrevencaoBuilder().constroiPadrao(false);
		Prevencao prevencaoAtrasada2 = new PrevencaoBuilder().constroiPadrao(false);
		Prevencao prevencaoEmDia = new PrevencaoBuilder().constroiPadrao(true);
		List<Prevencao> prevencoes = Arrays.asList(prevencaoAtrasada1, prevencaoAtrasada2, prevencaoEmDia);

		PrevencoesSeparadas prevencoesSeparadas = this.consntroiPrevencoesSeparadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getLista();

		Assert.assertThat(percentual.tamanho(), Matchers.is(3));
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(66.67));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(33.33));

	}

	@Test
	public void testConverterPercentual$percentualRedondo() {
		Prevencao prevencaoAtrasada1 = new PrevencaoBuilder().constroiPadrao(false);
		Prevencao prevencaoAtrasada2 = new PrevencaoBuilder().constroiPadrao(false);
		Prevencao prevencaoEmDia1 = new PrevencaoBuilder().constroiPadrao(true);
		Prevencao prevencaoEmDia2 = new PrevencaoBuilder().constroiPadrao(true);
		List<Prevencao> prevencoes = Arrays.asList(prevencaoAtrasada1, prevencaoAtrasada2, prevencaoEmDia1, prevencaoEmDia2);

		PrevencoesSeparadas prevencoesSeparadas = this.consntroiPrevencoesSeparadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getLista();

		Assert.assertThat(percentual.tamanho(), Matchers.is(4));
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(50.0));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(50.0));
	}

	@Test
	public void testConverterPercentual$percentualZerado() {
		Prevencao prevencaoAtrasada1 = new PrevencaoBuilder().constroiPadrao(false);
		Prevencao prevencaoAtrasada2 = new PrevencaoBuilder().constroiPadrao(false);
		List<Prevencao> prevencoes = Arrays.asList(prevencaoAtrasada1, prevencaoAtrasada2);

		PrevencoesSeparadas prevencoesSeparadas = this.consntroiPrevencoesSeparadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getLista();

		Assert.assertThat(percentual.tamanho(), Matchers.is(2));
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(100.0));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(0.0));
	}

	@Test(expected = IllegalStateException.class)
	public void testConverterPercentual$prevencoesNull() {
		PrevencoesSeparadas prevencoesSeparadas = this.consntroiPrevencoesSeparadasMock(null);

		new PercentualPrevencao(prevencoesSeparadas);
	}

	@Test(expected = IllegalStateException.class)
	public void testConverterPercentual$prevencoesIsEmpty() {
		PrevencoesSeparadas prevencoesSeparadas = this.consntroiPrevencoesSeparadasMock(new ArrayList<Prevencao>());

		new PercentualPrevencao(prevencoesSeparadas);
	}

	@Test(expected = IllegalStateException.class)
	public void testConverterPercentual$prevencoesSeparadasNull() {
		new PercentualPrevencao(null);
	}

	private PrevencoesSeparadas consntroiPrevencoesSeparadasMock(List<Prevencao> prevencoes) {
		PrevencoesSeparadas prevencoesSeparadas = Mockito.mock(PrevencoesSeparadas.class);
		Mockito.when(prevencoesSeparadas.getLista()).thenReturn(prevencoes);
		return prevencoesSeparadas;
	}
}
