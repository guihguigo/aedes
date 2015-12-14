package br.com.aedes.domain.model;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.entity.PrevencaoId;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class PrevencoesAgrupadasTest {
	
	@Before
	public void before() {
		Foco foco = Mockito.mock(Foco.class);
		Mockito.when(foco.getCodigo()).thenReturn(1);
		
		PrevencaoId prevencaoId = Mockito.mock(PrevencaoId.class);
		Mockito.when(prevencaoId.getFoco()).thenReturn(foco);
		
		Prevencao prevencao = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao.getId()).thenReturn(prevencaoId);
	}
	
//	@Test(expected = IllegalStateException.class)
//	public void testCriarPrevencao$prevencoesNull() {
//		new PrevencoesAgrupadas(null);
//	}
	
	@Test
	public void test() {
		Assert.assertTrue(true);
	}
}
