package br.com.aedes.controller;

import static br.com.aedes.constante.EnderecoURL.ENDERECOS;
import static br.com.aedes.constante.EnderecoURL.BAIRROS;
import static br.com.aedes.constante.EnderecoURL.CIDADES;
import static br.com.aedes.constante.EnderecoURL.ESTADOS;

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
public class EnderecoControllerTest extends ApplicationTest {
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodosEstadosTest() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(ENDERECOS + ESTADOS);
		
		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		this.jsonAserter(andReturn).assertThat("$", Matchers.hasSize(7));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarCidadesTest() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(ENDERECOS + CIDADES)
				.param("estado", "São Paulo");
		
		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		this.jsonAserter(andReturn).assertThat("$", Matchers.hasSize(1));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarBairros() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(ENDERECOS + BAIRROS)
				.param("estado", "São Paulo")
				.param("cidade", "Praia Grande");
		
		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		this.jsonAserter(andReturn).assertThat("$", Matchers.hasSize(2));
	}
	
	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}
}
