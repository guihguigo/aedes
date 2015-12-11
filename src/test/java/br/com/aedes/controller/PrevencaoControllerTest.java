package br.com.aedes.controller;

import java.io.UnsupportedEncodingException;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.jayway.jsonassert.JsonAssert;
import com.jayway.jsonassert.JsonAsserter;

import br.com.aedes.Application;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.repository.FocoRepository;
import br.com.aedes.repository.PrevencaoRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class, DbUnitTestExecutionListener.class })
public class PrevencaoControllerTest {
	private MockMvc mockMvc;
	@Autowired
	private WebApplicationContext wac;

	@Before
	public void setUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	public void listaTodasPrevencoesEFiltraPorEndereco() throws Exception {
		EnderecoDTO dto = new EnderecoDTO();
		dto.setBairro("Jardim Quietude");
		dto.setCidade("Praia Grande");
		dto.setEstado("São Paulo");

		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get("/prevencoes/mes")
		    .param("codigoFoco", "1")
		    .contentType(MediaType.APPLICATION_JSON)
		    .content(new ObjectMapper().writeValueAsBytes(dto));

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		jsonAserter(andReturn)
			.assertThat("$", Matchers.hasSize(2))
			.assertThat("$.[0].mes", Matchers.is("0"))
			.assertThat("$.[0].descricao", Matchers.is("Janeiro"))
			.assertThat("$.[1].mes", Matchers.is("1"))
			.assertThat("$.[1].descricao", Matchers.is("Fevereiro"));
	}
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	public void listaTodasPrevencoesEFiltraPorEnderecoImcompleto() throws Exception {
		EnderecoDTO dto = new EnderecoDTO();
		dto.setCidade("Praia Grande");
		
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get("/prevencoes/mes")
		    .param("codigoFoco", "1")
		    .contentType(MediaType.APPLICATION_JSON)
		    .content(new ObjectMapper().writeValueAsBytes(dto));

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
		
		jsonAserter(andReturn)
			.assertThat("$", Matchers.hasSize(2))
			.assertThat("$.[0].mes", Matchers.is("0"))
			.assertThat("$.[0].descricao", Matchers.is("Janeiro"))
			.assertThat("$.[1].mes", Matchers.is("1"))
			.assertThat("$.[1].descricao", Matchers.is("Fevereiro"));
	}

	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}
}
