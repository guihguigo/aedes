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
public class PrevencoesSeparadasPorFocoTest {
	@Autowired
	private PrevencaoRepository repository;
	private Prevencao prevencao;
	
	@Before
	public void before() {
		Foco foco = Mockito.mock(Foco.class);
		Mockito.when(foco.getNome()).thenReturn("ralos");
		
		PrevencaoId prevencaoId = Mockito.mock(PrevencaoId.class);
		Mockito.when(prevencaoId.getFoco()).thenReturn(foco);
		
		Prevencao prevencao = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao.getId()).thenReturn(prevencaoId);
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void testAdicionarPrevencao$esperandoException() {
		PrevencoesSeparadas prevencoesSeparadasPorFoco = new PrevencoesSeparadasPorFoco("Bebedouro de animais.");
		prevencoesSeparadasPorFoco.add(prevencao);
		
		Assert.assertThat(prevencoesSeparadasPorFoco.estaVazio(), Matchers.is(true));
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void testCriarPrevencao$esperandoException() {
		PrevencoesSeparadasPorFoco prevencoesSeparadasPorFoco = new PrevencoesSeparadasPorFoco("ralos", null);
		
		Assert.assertNull(prevencoesSeparadasPorFoco);
	}
}
