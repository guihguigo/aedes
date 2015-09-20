package br.com.aedes.domain.model;

import java.util.Arrays;

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
public class PrevencoesAgrupadasPorMesTest {
	private Prevencao prevencao;
	
	@Before
	public void before() {
		Prevencao prevencao = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao.getMesDataPrazo()).thenReturn(2);
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void testAdicionarPrevencao$prevencaoNaoPertenceAoGrupo() {
		PrevencoesAgrupadas prevencoesSeparadasPorFoco = new PrevencoesAgrupadasPorMes(1);
		prevencoesSeparadasPorFoco.add(prevencao);
	}
	
	@Test(expected = IllegalStateException.class)
	public void testCriarPrevencao$prevencoesAgrupadasNull() {
		new PrevencoesAgrupadasPorMes(1, null);
	}
	
	@Test(expected = IllegalStateException.class)
	public void testCriarPrevencao$MesNull() {
		new PrevencoesAgrupadasPorMes(null, Arrays.asList(prevencao));
	}
	
}
