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
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;
import br.com.aedes.builder.PrevencaoBuilder;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class SeparadorPorMesTest {
	
	@Autowired
	@Qualifier("agrupadorPorMes")
	private AgrupadorPorMes agrupador;
	
	@Test
	public void separar$prevencoesEmTodosOsMeses() {
		List<Prevencao> prevencoes = this.constuirPrevencoesPorMes();
		
		Map<Integer, PrevencoesAgrupadas> prevencoesSeparadas = agrupador.separar(prevencoes);
		
		this.testarPrevencoesAgrupadasPorMes(prevencoesSeparadas);
	}
	
	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesNull() {
		agrupador.separar(null);
	}
	
	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesIsEmpty() {
		agrupador.separar(new ArrayList<Prevencao>());
	}

	private void testarPrevencoesAgrupadasPorMes(Map<Integer, PrevencoesAgrupadas> prevencoesAgrupadas) {
		for (Integer key : prevencoesAgrupadas.keySet()) {
			PrevencoesAgrupadasPorMes grupo = (PrevencoesAgrupadasPorMes) prevencoesAgrupadas.get(key);
				
			Assert.assertThat(grupo.getGrupo(), Matchers.hasSize(2));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(0).getMesDataPrazo()));
			Assert.assertThat(key, Matchers.is(grupo.getGrupo().get(1).getMesDataPrazo()));
		}
	}

	private List<Prevencao> constuirPrevencoesPorMes() {
		Calendar calendar = Calendar.getInstance();
		
		List<Prevencao> prevencoes = new ArrayList<>();
		
		for (int i = 0; i < 12; i++) {
			calendar.set(Calendar.MONTH, i);
			Prevencao prevencao1 = new PrevencaoBuilder().comDataPrazo(calendar.getTime()).constroi();
			Prevencao prevencao2 = new PrevencaoBuilder().comDataPrazo(calendar.getTime()).constroi();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}
			
		return prevencoes;
	}
}
