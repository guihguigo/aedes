package br.com.aedes.controller;

import static br.com.aedes.constante.EnderecoURL.URL_ENDERECOS;
import static br.com.aedes.constante.EnderecoURL.URL_ENDERECOS_CIDADES;
import static br.com.aedes.constante.EnderecoURL.URL_ENDERECOS_ESTADOS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.constante.EnderecoURL;
import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.repository.EnderecoRepository;
import br.com.aedes.utils.SQLLikeUtils;

@RestController
@RequestMapping(URL_ENDERECOS)
public class EnderecoController {
	
	@Autowired
	private EnderecoRepository repository;

	@RequestMapping(value = URL_ENDERECOS_ESTADOS, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<String> listarEstados() {
		return this.repository.listarEstados();
	}
	
	@RequestMapping(value = URL_ENDERECOS_CIDADES, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<String> listarCidades(@ModelAttribute EnderecoDTO endereco) {
		return this.repository.listarCidadesPorEstado(endereco.getEstado());
	}
	
	@RequestMapping(value = EnderecoURL.URL_ENDERECOS_BAIRROS, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<String> listarBairros(@ModelAttribute EnderecoDTO endereco) {
		return this.repository.listarBairrosPorCidadeEEstado(endereco.getCidade(), endereco.getEstado());
	}
}
