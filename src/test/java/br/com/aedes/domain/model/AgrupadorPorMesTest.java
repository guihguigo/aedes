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
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.model.AgrupadorPorMes;
import br.com.aedes.domain.model.Grupo;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class AgrupadorPorMesTest {
	
	@Autowired
	@Qualifier("agrupadorPorMes")
	private AgrupadorPorMes agrupador;
	
	@Test
	public void separar$prevencoesEmTodosOsMeses() {
		List<Prevencao> prevencoes = this.constuirPrevencoesPorMes();
		
		Map<Integer, Grupo> prevencoesSeparadas = agrupador.agrupar(prevencoes);
		
		this.testarPrevencoesAgrupadasPorMes(prevencoesSeparadas);
	}
	
	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesNull() {
		agrupador.agrupar(null);
	}
	
	@Test(expected = IllegalStateException.class)
	public void separar$prevencoesIsEmpty() {
		agrupador.agrupar(new ArrayList<Prevencao>());
	}

	private void testarPrevencoesAgrupadasPorMes(Map<Integer, Grupo> prevencoesAgrupadas) {
		for (Integer key : prevencoesAgrupadas.keySet()) {
			Grupo grupo =  prevencoesAgrupadas.get(key);
				
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
			Prevencao prevencao1 = Prevencao.builder().dataPrazo(calendar.getTime()).build();
			Prevencao prevencao2 = Prevencao.builder().dataPrazo(calendar.getTime()).build();
			prevencoes.addAll(Arrays.asList(prevencao1, prevencao2));
		}
			
		return prevencoes;
	}
}
