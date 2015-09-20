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

		PrevencoesAgrupadas prevencoesSeparadas = this.consntroiPrevencoesAgrupadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getGrupo();

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

		PrevencoesAgrupadas prevencoesSeparadas = this.consntroiPrevencoesAgrupadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getGrupo();

		Assert.assertThat(percentual.getAtrasada(), Matchers.is(50.0));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(50.0));
	}

	@Test
	public void testConverterPercentual$percentualNoMaximo() {
		Prevencao prevencaoAtrasada1 = new PrevencaoBuilder().constroiPadrao(false);
		Prevencao prevencaoAtrasada2 = new PrevencaoBuilder().constroiPadrao(false);
		List<Prevencao> prevencoes = Arrays.asList(prevencaoAtrasada1, prevencaoAtrasada2);

		PrevencoesAgrupadas prevencoesSeparadas = this.consntroiPrevencoesAgrupadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getGrupo();

		Assert.assertThat(percentual.getAtrasada(), Matchers.is(100.0));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(0.0));
	}

	@Test
	public void testConverterPercentual$PercentuaisZerados() {
		PrevencoesAgrupadas prevencoesAgrupadas = this.consntroiPrevencoesAgrupadasMock(new ArrayList<Prevencao>());
		
		PercentualPrevencao percentual = new PercentualPrevencao(prevencoesAgrupadas);
		
		Assert.assertThat(percentual.getAtrasada(), Matchers.is(0.0));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(0.0));
		
		Mockito.verify(prevencoesAgrupadas).getGrupo();
	}
	
	@Test(expected = IllegalStateException.class)
	public void testConverterPercentual$prevencoesAgrupadasNull() {
		new PercentualPrevencao(null);
	}

	private PrevencoesAgrupadas consntroiPrevencoesAgrupadasMock(List<Prevencao> prevencoes) {
		PrevencoesAgrupadas prevencoesSeparadas = Mockito.mock(PrevencoesAgrupadas.class);
		Mockito.when(prevencoesSeparadas.getGrupo()).thenReturn(prevencoes);
		return prevencoesSeparadas;
	}
}
