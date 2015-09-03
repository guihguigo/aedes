package br.com.aedes.domain.model;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.aedes.Application;
import br.com.aedes.repository.PrevencaoRepository;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.DatabaseTearDown;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = {Application.class})
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class,
    DbUnitTestExecutionListener.class })
public class CalculadorPercentualMesTest {
	@Autowired
	private CalculadorPercentual calculador;
	
	@Autowired
	private PrevencaoRepository repository;
	
	@Autowired
	@Qualifier("separadorPorMes")
	private SeparadorTemplate organizador;
	
	@Test
	@DatabaseSetup("classpath:dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:dbunit/prevencaoPopuladaData.xml")
	public void testCalcularPercentualPorMes() {
		List<Prevencao> prevencoes = (List<Prevencao>) repository.findAll();
		
		List<Percentual> percentuais = calculador.converterPercentual(organizador, prevencoes);
		
		Assert.assertEquals(1, percentuais.size());
		Assert.assertEquals(3, percentuais.get(0).tamanho());
	}
}
