package br.com.aedes.controller;

import java.io.UnsupportedEncodingException;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonassert.JsonAssert;
import com.jayway.jsonassert.JsonAsserter;

import br.com.aedes.Application;
import br.com.aedes.compose.Compose;
import br.com.aedes.domain.model.Endereco;
import br.com.aedes.domain.model.Foco;
import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.repository.FocoRepository;
import br.com.aedes.repository.PrevencaoRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringApplicationConfiguration(classes = Application.class)
public class PrevencaoControllerTest {
	
	@Autowired
	private PrevencaoRepository repository;
	
	@Autowired
	private FocoRepository focoRepo;
	
	private MockMvc mockMvc;
	@Autowired
	private WebApplicationContext wac;
	
	@Before
	public void setUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac)
			.build();
	}
	
	@Test
	@Transactional
	public void listaTodasPrevencoesEFiltraPorEndereco() throws Exception {
		
		Foco foco = Compose.foco(1).build();
		focoRepo.save(foco);
		
		Endereco endereco = Compose.endereco().build();
		Prevencao prevencao = Compose.prevencao(true, foco).endereco(endereco).build();
		
		repository.save(prevencao);
		repository.flush();
		
		EnderecoDTO dto = new EnderecoDTO(endereco);

		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get("/prevencoes/mes")
				.param("codigoFoco", foco.getCodigo().toString())
				.contentType(MediaType.APPLICATION_JSON)
				.content(new ObjectMapper().writeValueAsBytes(dto));
		
		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
				
		jsonAserter(andReturn).assertEquals("$.[0].mes", "10");
		
	}
	
	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}
}
