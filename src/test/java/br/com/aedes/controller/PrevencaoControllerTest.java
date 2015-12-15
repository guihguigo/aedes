package br.com.aedes.controller;

import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_ESTADO;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_MES;
import static br.com.aedes.constante.PrevencaoURL.URL_PREVENCOES_SINCRONIZAR;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.Assert;
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
import com.github.springtestdbunit.annotation.DatabaseTearDown;
import com.jayway.jsonassert.JsonAssert;
import com.jayway.jsonassert.JsonAsserter;

import br.com.aedes.Application;
import br.com.aedes.compose.Compose;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.dto.FocoDTO;
import br.com.aedes.dto.PrevencaoDTO;
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
	
	@Autowired
	private PrevencaoRepository prevencaoRepository;
	
	@Autowired
	private FocoRepository focoRepository;

	@Before
	public void setUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

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
		
		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(6));
		jsonAserter(andReturn).assertThat("$.[*].chave", 
				Matchers.containsInAnyOrder("São Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais", "Pernambuco", "Goias"));
	}

	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoVazioData.xml")
	public void sincronizaPrevencao() throws Exception {
		Foco focoPersisted = Compose.foco(1).build();
		focoRepository.save(focoPersisted);
		
		EnderecoDTO endereco = EnderecoDTO.builder()
				.estado("Jardim Quietude")
				.cidade("Praia Grande")
				.estado("São Paulo")
				.build();
		
		FocoDTO foco = FocoDTO.builder()
				.codigo(1)
				.build();
		
		PrevencaoDTO prevencao = PrevencaoDTO.builder()
				.codigoCelular("123")
				.dataCriacao(new Date())
				.dataPrazo(new Date())
				.foco(foco)
				.endereco(endereco)
				.build();
		
		MockHttpServletRequestBuilder post = MockMvcRequestBuilders.post(URL_PREVENCOES + URL_PREVENCOES_SINCRONIZAR)
		    .contentType(MediaType.APPLICATION_JSON)
		    .content(new ObjectMapper().writeValueAsBytes(prevencao));
		
		this.mockMvc.perform(post)
				.andExpect(MockMvcResultMatchers.status()
				.isCreated())
				.andReturn();
		
		List<Prevencao> prevencoes = this.prevencaoRepository.findAll();
		
		Assert.assertThat(prevencoes, Matchers.hasSize(1));
		Assert.assertThat(prevencoes.get(0).getId().getCodigoCelular(), Matchers.is(prevencao.getCodigoCelular()));
		Assert.assertThat(prevencoes.get(0).getId().getFoco().getCodigo(), Matchers.is(prevencao.getFoco().getCodigo()));
		Assert.assertThat(prevencoes.get(0).getId().getDataCriacao(), Matchers.notNullValue());
	}
	
	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}
}
