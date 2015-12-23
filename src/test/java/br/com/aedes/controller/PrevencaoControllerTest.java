package br.com.aedes.controller;

import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_CIDADE;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_ESTADO;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_MES;

import java.io.UnsupportedEncodingException;

import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.DatabaseTearDown;
import com.jayway.jsonassert.JsonAssert;
import com.jayway.jsonassert.JsonAsserter;

import br.com.aedes.Application;
import br.com.aedes.ApplicationTest;
import br.com.aedes.constante.PrevencaoURL;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class, DbUnitTestExecutionListener.class })
public class PrevencaoControllerTest extends ApplicationTest{

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoEFoco() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_PREVENCOES + URL_PREVENCOES_MES)
				.param("codigoFoco", "1")
				.param("bairro", "Jardim Quietude")
				.param("cidade", "Praia Grande")
				.param("estado", "São Paulo");

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(1))
				.assertThat("$.[0].chave", Matchers.is("0"))
		    .assertThat("$.[0].descricao", Matchers.is("Janeiro"));
	}

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoImcompleto() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_PREVENCOES + URL_PREVENCOES_MES)
				.param("codigoFoco", "1")
				.param("cidade", "Praia Grande");

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(1))
				.assertThat("$.[0].chave", Matchers.is("0"))
		    .assertThat("$.[0].descricao", Matchers.is("Janeiro"));
	}

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPorMes() throws Exception {

		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_PREVENCOES + URL_PREVENCOES_MES);

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(12));
	}

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoVazioData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodasPrevencoesPorMes$Vazio() throws Exception {

		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_PREVENCOES + URL_PREVENCOES_MES);

		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status()
				.isOk())
				.andReturn();
		
		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(0));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodasPrevencoesPorRegiao() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_PREVENCOES + URL_PREVENCOES_ESTADO);
		
		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status()
				.isOk())
				.andReturn();
		
		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(7));
		jsonAserter(andReturn).assertThat("$.[*].chave", 
				Matchers.containsInAnyOrder("Ceará", "São Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais", "Pernambuco", "Goias"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodasPrevencoesPorCidade() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_PREVENCOES + URL_PREVENCOES_CIDADE);

		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status()
				.isOk())
				.andReturn();
		
		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(7));
		jsonAserter(andReturn).assertThat("$.[*].chave", 
				Matchers.containsInAnyOrder("Fortaleza", "Praia Grande", "Rio de Janeiro", "Salvador", "Belo Horizonte", "Recife", "Goiania"));
	}
	
	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}
}
