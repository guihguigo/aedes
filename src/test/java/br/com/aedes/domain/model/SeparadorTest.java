package br.com.aedes.domain.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;
import br.com.aedes.builder.PrevencaoBuilder;
import br.com.aedes.domain.model.filtros.ComoSepararTemplate;
import br.com.aedes.domain.model.filtros.impl.ComoSepararPorFoco;
import br.com.aedes.domain.model.filtros.impl.ComoSepararPorMes;
import br.com.aedes.domain.model.filtros.impl.Separador;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class SeparadorTest {

	@Autowired
	private Separador separador;

	@Test
	@SuppressWarnings("unchecked")
	public void testSeparar$porFoco() {
		ComoSepararTemplate<Integer> comoSeparar = new ComoSepararPorFoco();

		Map<Integer, PrevencoesSeparadas> prevencoesSeparadas = (Map<Integer, PrevencoesSeparadas>) separador.separar(this.constuirPrevencoes(), comoSeparar, TipoSepararPor.FOCO);

		this.testarPrevencoesSeparadasPorFoco(prevencoesSeparadas);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testSeparar$porFocoPrevencoesNull() {

		separador.separar(null, null, TipoSepararPor.FOCO);
	}

	@SuppressWarnings("unchecked")
	@Test
	public void separar$prevencoesEmTodosOsMeses() {
		ComoSepararTemplate<Integer> comoSeparar = new ComoSepararPorMes();

		Map<Integer, PrevencoesSeparadas> prevencoesSeparadas = (Map<Integer, PrevencoesSeparadas>) separador.separar(this.constuirPrevencoesPorMes(),
				comoSeparar, TipoSepararPor.MES);

		this.testarPrevencoesSeparadasPorMes(prevencoesSeparadas);
	}

	private List<Prevencao> constuirPrevencoesPorMes() {
		List<Prevencao> prevencoes = new ArrayList<>();

		Calendar calendar = Calendar.getInstance();

		for (int i = 0; i < 12; i++) {
			calendar.set(Calendar.MONTH, i);

			Prevencao prevencao1 = new PrevencaoBuilder().comoCodigoFoco(i).constroi();
			Prevencao prevencao2 = new PrevencaoBuilder().comoCodigoFoco(i).constroi();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}

		return prevencoes;
	}

	private List<Prevencao> constuirPrevencoes() {
		List<Prevencao> prevencoes = new ArrayList<>();

		for (int i = 1; i <= 15; i++) {
			Prevencao prevencao1 = new PrevencaoBuilder().comoCodigoFoco(i).constroi();
			Prevencao prevencao2 = new PrevencaoBuilder().comoCodigoFoco(i).constroi();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}

		return prevencoes;
	}

	private void testarPrevencoesSeparadasPorFoco(Map<Integer, PrevencoesSeparadas> prevencoesSeparadas) {
		for (Integer key : prevencoesSeparadas.keySet()) {
			PrevencoesSeparadasPorFoco prevencoes = (PrevencoesSeparadasPorFoco) prevencoesSeparadas.get(key);

			Assert.assertNotNull(prevencoes);
			Assert.assertThat(prevencoes.getLista(), Matchers.hasSize(2));
			Assert.assertThat(prevencoes.getCodigo(), Matchers.is(prevencoes.getLista().get(0).getId().getFoco().getCodigo()));
			Assert.assertThat(prevencoes.getCodigo(), Matchers.is(prevencoes.getLista().get(1).getId().getFoco().getCodigo()));
		}
	}

	private void testarPrevencoesSeparadasPorMes(Map<Integer, PrevencoesSeparadas> prevencoesSeparadas) {
		for (Integer key : prevencoesSeparadas.keySet()) {
			PrevencoesSeparadasPorFoco prevencoes = (PrevencoesSeparadasPorFoco) prevencoesSeparadas.get(key);

			Assert.assertNotNull(prevencoes);
			Assert.assertThat(prevencoes.getLista(), Matchers.hasSize(2));
			Assert.assertThat(prevencoes.getCodigo(), Matchers.is(prevencoes.getLista().get(0).getMesDataPrazo()));
			Assert.assertThat(prevencoes.getCodigo(), Matchers.is(prevencoes.getLista().get(1).getMesDataPrazo()));
		}
	}

}
