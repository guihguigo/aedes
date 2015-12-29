package br.com.aedes.controller;

import static br.com.aedes.constante.SincronizacaoURL.URL_SINCRONIZACAO;
import static br.com.aedes.constante.SincronizacaoURL.URL_SINCRONIZACAO_DELETAR;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.DatabaseTearDown;

import br.com.aedes.ApplicationTest;
import br.com.aedes.compose.Compose;
import br.com.aedes.constante.SincronizacaoURL;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.dto.FocoDTO;
import br.com.aedes.dto.PrevencaoDTO;
import br.com.aedes.repository.FocoRepository;
import br.com.aedes.repository.PrevencaoRepository;

@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class, DirtiesContextTestExecutionListener.class,
  TransactionalTestExecutionListener.class, DbUnitTestExecutionListener.class })
public class SincronizacaoControllerTest extends ApplicationTest{
	@Autowired
	private PrevencaoRepository prevencaoRepository;
	
	@Autowired
	private FocoRepository focoRepository;
	
	@Test
	@Transactional
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
		
		MockHttpServletRequestBuilder post = MockMvcRequestBuilders.post(SincronizacaoURL.URL_SINCRONIZACAO)
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
	
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void deletarPrevencao() throws Exception {
		List<Prevencao> prevencoes = this.prevencaoRepository.findAll();
		Prevencao prevencao = prevencoes.get(0);
		
		MockHttpServletRequestBuilder delete = MockMvcRequestBuilders.delete(URL_SINCRONIZACAO + URL_SINCRONIZACAO_DELETAR, 
				prevencao.getId().getCodigoCelular(),
				prevencao.getId().getFoco().getCodigo(), 
				prevencao.getId().getDataCriacao());
		
		this.mockMvc.perform(delete)
		.andExpect(MockMvcResultMatchers.status().isOk());
		
		Assert.assertThat(this.prevencaoRepository.findAll(), Matchers.hasSize(prevencoes.size()-1));
	}
	
}