package br.com.aedes.domain.model;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import br.com.aedes.ApplicationTest;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.entity.PrevencaoId;

public class PrevencoesAgrupadasTest extends ApplicationTest {
	
	@Before
	public void before() {
		Foco foco = Mockito.mock(Foco.class);
		Mockito.when(foco.getCodigo()).thenReturn(1);
		
		PrevencaoId prevencaoId = Mockito.mock(PrevencaoId.class);
		Mockito.when(prevencaoId.getFoco()).thenReturn(foco);
		
		Prevencao prevencao = Mockito.mock(Prevencao.class);
		Mockito.when(prevencao.getId()).thenReturn(prevencaoId);
	}
	
	@Test
	public void test() {
		Assert.assertTrue(true);
	}
}
