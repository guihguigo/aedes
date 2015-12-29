package br.com.aedes.controller;

import static br.com.aedes.constante.EnderecoURL.ENDERECOS;
import static br.com.aedes.constante.EnderecoURL.BAIRROS;
import static br.com.aedes.constante.EnderecoURL.CIDADES;
import static br.com.aedes.constante.EnderecoURL.ESTADOS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.dto.EnderecoDTO;
import br.com.aedes.repository.EnderecoRepository;

@RestController
@RequestMapping(ENDERECOS)
public class EnderecoController {
	
	@Autowired
	private EnderecoRepository repository;

	@RequestMapping(value = ESTADOS, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<String> listarEstados() {
		return this.repository.listarEstados();
	}
	
	@RequestMapping(value = CIDADES, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<String> listarCidades(@ModelAttribute EnderecoDTO endereco) {
		return this.repository.listarCidadesPorEstado(endereco.getEstado());
	}
	
	@RequestMapping(value = BAIRROS, method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<String> listarBairros(@ModelAttribute EnderecoDTO endereco) {
		return this.repository.listarBairrosPorCidadeEEstado(endereco.getCidade(), endereco.getEstado());
	}
}
