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
import br.com.aedes.compose.Compose;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class PercentualPrevencaoTest {

	@Test
	public void testConverterPercentualPorMes$percentualQuebrado() {
		Foco foco = Compose.foco(1).build();
		Prevencao prevencaoAtrasada1 = Compose.prevencao(false, foco).build();
		Prevencao prevencaoAtrasada2 = Compose.prevencao(false, foco).build();
		Prevencao prevencaoEmDia =  Compose.prevencao(true, foco).build();
		List<Prevencao> prevencoes = Arrays.asList(prevencaoAtrasada1, prevencaoAtrasada2, prevencaoEmDia);

		PrevencoesAgrupadas prevencoesSeparadas = this.consntroiPrevencoesAgrupadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getGrupo();

		Assert.assertThat(percentual.getAtrasada(), Matchers.is(66.67));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(33.33));

	}

	@Test
	public void testConverterPercentual$percentualRedondo() {
		Foco foco = Compose.foco(1).build();
		Prevencao prevencaoAtrasada1 = Compose.prevencao(false, foco).build();
		Prevencao prevencaoAtrasada2 = Compose.prevencao(false, foco).build();
		Prevencao prevencaoEmDia1 =  Compose.prevencao(true, foco).build();
		Prevencao prevencaoEmDia2 =  Compose.prevencao(true, foco).build();
		List<Prevencao> prevencoes = Arrays.asList(prevencaoAtrasada1, prevencaoAtrasada2, prevencaoEmDia1, prevencaoEmDia2);

		PrevencoesAgrupadas prevencoesSeparadas = this.consntroiPrevencoesAgrupadasMock(prevencoes);

		Percentual percentual = new PercentualPrevencao(prevencoesSeparadas);

		Mockito.verify(prevencoesSeparadas, Mockito.atLeastOnce()).getGrupo();

		Assert.assertThat(percentual.getAtrasada(), Matchers.is(50.0));
		Assert.assertThat(percentual.getEmDia(), Matchers.is(50.0));
	}

	@Test
	public void testConverterPercentual$percentualNoMaximo() {
		Foco foco = Compose.foco(1).build();
		Prevencao prevencaoAtrasada1 = Compose.prevencao(false, foco).build();
		Prevencao prevencaoAtrasada2 = Compose.prevencao(false, foco).build();
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
