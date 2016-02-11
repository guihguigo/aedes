package br.com.aedes.controller;

import static br.com.aedes.constante.PrevencaoURL.POR_CIDADE;
import static br.com.aedes.constante.PrevencaoURL.POR_ESTADO;
import static br.com.aedes.constante.PrevencaoURL.POR_FOCO;
import static br.com.aedes.constante.PrevencaoURL.POR_MES;
import static br.com.aedes.constante.PrevencaoURL.PREVENCOES;

import java.io.UnsupportedEncodingException;

import org.hamcrest.Matchers;
import org.junit.Test;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.DatabaseTearDown;
import com.jayway.jsonassert.JsonAssert;
import com.jayway.jsonassert.JsonAsserter;

import br.com.aedes.ApplicationTest;

@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class, DbUnitTestExecutionListener.class })
public class PrevencaoControllerTest extends ApplicationTest{

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoEFoco() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES)
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
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoImcompleto_Cidade() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES)
				.param("codigoFoco", "1")
				.param("cidade", "Praia Grande");

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(2))
				.assertThat("$.[*].chave", Matchers.contains("0", "1"))
		    .assertThat("$.[*].descricao", Matchers.contains("Janeiro", "Fevereiro"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoImcompleto_EstadoECidade() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES)
				.param("estado", "Rio de Janeiro")
				.param("cidade", "Rio de Janeiro");

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(2))
				.assertThat("$.[*].chave", Matchers.contains("2", "3"))
		    .assertThat("$.[*].descricao", Matchers.contains("Março", "Abril"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoImcompleto_EstadoECidadeEFoco() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES)
				.param("codigoFoco", "3")
				.param("estado", "Rio de Janeiro")
				.param("cidade", "Rio de Janeiro");

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(1))
				.assertThat("$.[*].chave", Matchers.contains("2"))
		    .assertThat("$.[*].descricao", Matchers.contains("Março"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoImcompleto_EstadoECidadeEBairro() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES)
				.param("estado", "Rio de Janeiro")
				.param("cidade", "Rio de Janeiro")
				.param("bairro", "Leblon");

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(2))
				.assertThat("$.[*].chave", Matchers.contains("2", "3"))
		    .assertThat("$.[*].descricao", Matchers.contains("Março", "Abril"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoImcompleto_Estado() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES)
				.param("estado", "Rio de Janeiro");
				

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(3))
				.assertThat("$.[*].chave", Matchers.contains("2", "3", "4"))
		    .assertThat("$.[*].descricao", Matchers.contains("Março", "Abril", "Maio"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPrevencoesPorMesEFiltraPorEnderecoImcompleto_Foco() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES)
				.param("codigoFoco", "3");
				

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(1))
				.assertThat("$.[*].chave", Matchers.contains("2"))
		    .assertThat("$.[*].descricao", Matchers.contains("Março"));
	}

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listaTodasPorMes() throws Exception {

		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES);

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(12));
	}

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoVazioData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodasPrevencoesPorMes$Vazio() throws Exception {

		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_MES);

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
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_ESTADO);
		
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
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_CIDADE);

		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status()
				.isOk())
				.andReturn();
		
		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(8));
		jsonAserter(andReturn).assertThat("$.[*].chave", 
				Matchers.containsInAnyOrder("Fortaleza", "Praia Grande", "Rio de Janeiro", "Salvador", "Belo Horizonte", "Recife", "Goiania", "Petrópolis"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodasPrevencoesPorFoco() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(PREVENCOES + POR_FOCO);

		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status()
				.isOk())
				.andReturn();
		
		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(11));
	}
	
	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}
}
