package br.com.aedes.controller;

import static br.com.aedes.constante.FocoURL.URL_FOCOS;

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
public class FocoControllerTest extends ApplicationTest {
	@Test
	@DatabaseSetup("classpath:/dbunit/prevencaoPopuladaData.xml")
	@DatabaseTearDown("classpath:/dbunit/prevencaoVazioData.xml")
	public void listarTodosFocos() throws Exception {
		MockHttpServletRequestBuilder get = MockMvcRequestBuilders.get(URL_FOCOS);		 

		MvcResult andReturn = this.mockMvc.perform(get).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

		jsonAserter(andReturn).assertThat("$", Matchers.hasSize(15));
	}

	public JsonAsserter jsonAserter(MvcResult result) throws UnsupportedEncodingException {
		return JsonAssert.with(result.getResponse().getContentAsString());
	}

}
