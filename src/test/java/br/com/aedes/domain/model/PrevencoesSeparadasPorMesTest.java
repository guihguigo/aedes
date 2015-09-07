package br.com.aedes.domain.model;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;
import br.com.aedes.repository.PrevencaoRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class PrevencoesSeparadasPorMesTest {
	@Autowired
	private PrevencaoRepository repository;
	private Prevencao prevencao;
	
	@Before
	public void before() {
		Prevencao prevencao = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao.getMesDataPrazo()).thenReturn(2);
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void testAdicionarPrevencao$esperandoException() {
		PrevencoesSeparadas prevencoesSeparadasPorFoco = new PrevencoesSeparadasPorMes(1);
		prevencoesSeparadasPorFoco.add(prevencao);
		
		Assert.assertThat(prevencoesSeparadasPorFoco.estaVazio(), Matchers.is(true));
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void testCriarPrevencao$esperandoException() {
		PrevencoesSeparadasPorMes prevencoesSeparadasPorFoco = new PrevencoesSeparadasPorMes(1, null);
		
		Assert.assertNull(prevencoesSeparadasPorFoco);
	}
}
