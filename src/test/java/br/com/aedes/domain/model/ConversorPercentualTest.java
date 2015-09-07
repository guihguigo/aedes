package br.com.aedes.domain.model;

import java.util.List;

import org.hamcrest.Matchers;
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
@SpringApplicationConfiguration(classes = Application.class)
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class,
		DirtiesContextTestExecutionListener.class,
		TransactionalTestExecutionListener.class,
		DbUnitTestExecutionListener.class })
public class ConversorPercentualTest {
	@Autowired
	private ConversorPercentual calculador;

	@Autowired
	private PrevencaoRepository repository;

	@Autowired
	@Qualifier("separadorPorMes")
	private SeparadorTemplate separadorPorMes;

	@Autowired
	@Qualifier("separadorPorFoco")
	private SeparadorTemplate separadorPorFoco;

	@Test
	@DatabaseSetup("classpath:dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:dbunit/prevencaoVazioData.xml")
	public void testConverterPercentualPorMes() {
		List<Prevencao> prevencoes = (List<Prevencao>) repository.findAll();

		List<Percentual> percentuais = calculador.converterPercentual(
				separadorPorMes, prevencoes);

		Assert.assertThat(12, Matchers.is(percentuais.size()));

		Assert.assertEquals(3, percentuais.get(0).tamanho());
		Assert.assertThat(percentuais.get(0).getPrevencao(0).getMesDataPrazo(), Matchers.is(0));

		Assert.assertEquals(3, percentuais.get(1).tamanho());
		Assert.assertThat(percentuais.get(1).getPrevencao(0).getMesDataPrazo(), Matchers.is(1));

		Assert.assertEquals(3, percentuais.get(2).tamanho());
		Assert.assertThat(percentuais.get(2).getPrevencao(0).getMesDataPrazo(), Matchers.is(2));

		Assert.assertEquals(3, percentuais.get(3).tamanho());
		Assert.assertThat(percentuais.get(3).getPrevencao(0).getMesDataPrazo(), Matchers.is(3));

		Assert.assertEquals(3, percentuais.get(4).tamanho());
		Assert.assertThat(percentuais.get(4).getPrevencao(0).getMesDataPrazo(), Matchers.is(4));

		Assert.assertEquals(3, percentuais.get(5).tamanho());
		Assert.assertThat(percentuais.get(5).getPrevencao(0).getMesDataPrazo(), Matchers.is(5));

		Assert.assertEquals(3, percentuais.get(6).tamanho());
		Assert.assertThat(percentuais.get(6).getPrevencao(0).getMesDataPrazo(), Matchers.is(6));

		Assert.assertEquals(3, percentuais.get(7).tamanho());
		Assert.assertThat(percentuais.get(7).getPrevencao(0).getMesDataPrazo(), Matchers.is(7));

		Assert.assertEquals(3, percentuais.get(8).tamanho());
		Assert.assertThat(percentuais.get(8).getPrevencao(0).getMesDataPrazo(), Matchers.is(8));

		Assert.assertEquals(3, percentuais.get(9).tamanho());
		Assert.assertThat(percentuais.get(9).getPrevencao(0).getMesDataPrazo(), Matchers.is(9));

		Assert.assertEquals(3, percentuais.get(10).tamanho());
		Assert.assertThat(percentuais.get(10).getPrevencao(0).getMesDataPrazo(), Matchers.is(10));

		Assert.assertEquals(3, percentuais.get(11).tamanho());
		Assert.assertThat(percentuais.get(11).getPrevencao(0).getMesDataPrazo(), Matchers.is(11));
	}

	@Test
	@DatabaseSetup("classpath:dbunit/prevencaoVazioData.xml")
	@DatabaseTearDown("classpath:dbunit/prevencaoVazioData.xml")
	public void TestConverterPercentualPorMes$prevencoesNull() {
		List<Prevencao> prevencoes = (List<Prevencao>) repository.findAll();

		List<Percentual> percentuais = calculador.converterPercentual(
				separadorPorMes, prevencoes);
		
		Assert.assertNull(percentuais);
	}
	
//	@Test
//	@DatabaseSetup("classpath:dbunit/prevencaoPopuladaData.xml")
//	@DatabaseTearDown("classpath:dbunit/prevencaoVazioData.xml")
//	public void testConverterPercentualPorFoco() {
//		List<Prevencao> prevencoes = (List<Prevencao>) repository.findAll();
//
//		List<Percentual> percentuais = this.calculador.converterPercentual(
//				separadorPorFoco, prevencoes);
//		
//		Assert.assertThat(percentuais.size(), Matchers.is(1));
//
//	}
}
