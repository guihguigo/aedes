package br.com.aedes.domain.model;

import java.util.Arrays;

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
public class PrevencoesAgrupadasPorFocoTest {
	@Autowired
	private PrevencaoRepository repository;
	private Prevencao prevencao;
	
	@Before
	public void before() {
		Foco foco = Mockito.mock(Foco.class);
		Mockito.when(foco.getCodigo()).thenReturn(1);
		
		PrevencaoId prevencaoId = Mockito.mock(PrevencaoId.class);
		Mockito.when(prevencaoId.getFoco()).thenReturn(foco);
		
		Prevencao prevencao = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao.getId()).thenReturn(prevencaoId);
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void testAdicionarPrevencao$prevencaoNaoPertenceAoGrupo() {
		PrevencoesAgrupadas agrupadas = new PrevencoesAgrupadasPorFoco(2);
		agrupadas.add(prevencao);
	}
	
	@Test(expected = IllegalStateException.class)
	public void testCriarPrevencao$prevencoesNull() {
		new PrevencoesAgrupadasPorFoco(1, null);
	}
	
	@Test(expected = IllegalStateException.class)
	public void testCriarPrevencao$codigoFocoNull() {
		new PrevencoesAgrupadasPorFoco(null, Arrays.asList(prevencao));
	}
}
