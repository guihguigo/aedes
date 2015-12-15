package br.com.aedes.controller;

import static br.com.aedes.constante.EnderecoURL.URL_ENDERECOS;
import static br.com.aedes.constante.EnderecoURL.URL_ENDERECOS_BAIRROS;
import static br.com.aedes.constante.EnderecoURL.URL_ENDERECOS_CIDADES;
import static br.com.aedes.constante.EnderecoURL.URL_ENDERECOS_ESTADOS;

import java.io.UnsupportedEncodingException;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.DatabaseTearDown;
import com.jayway.jsonassert.JsonAssert;
import com.jayway.jsonassert.JsonAsserter;

import br.com.aedes.Application;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class, DbUnitTestExecutionListener.class })
public class EnderecoControllerTest {
	private MockMvc mockMvc;
	
	@Autowired
	private WebApplicationContext wac;
	
	@Before
	public void setUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodosEstadosTest() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_ENDERECOS + URL_ENDERECOS_ESTADOS);
		
		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		this.jsonAserter(andReturn).assertThat("$", Matchers.hasSize(7));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarCidadesTest() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_ENDERECOS + URL_ENDERECOS_CIDADES)
				.param("estado", "São Paulo");
		
		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		this.jsonAserter(andReturn).assertThat("$", Matchers.hasSize(1));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarBairros() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_ENDERECOS + URL_ENDERECOS_BAIRROS)
				.param("estado", "São Paulo")
				.param("cidade", "Praia Grande")
				.param("bairro", "jardim");
		
		MvcResult andReturn = this.mockMvc.perform(get)
				.andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		this.jsonAserter(andReturn).assertThat("$", Matchers.hasSize(1));
	}
	
	
	
	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}
}
