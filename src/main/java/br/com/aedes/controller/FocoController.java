package br.com.aedes.controller;

import static br.com.aedes.constante.FocoURL.URL_FOCOS;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.aedes.domain.entity.Foco;
import br.com.aedes.dto.FocoDTO;
import br.com.aedes.repository.FocoRepository;

@RestController
@RequestMapping(URL_FOCOS)
public class FocoController {
	@Autowired
	private FocoRepository repository;
	
	@RequestMapping(method = RequestMethod.GET)
	@Transactional(readOnly = true)
	public List<FocoDTO> listarFocos() {
		return repository.findAll().stream()
				.map(f -> this.toDTO(f))
				.collect(Collectors.toList());
	}

	private FocoDTO toDTO(Foco f) {
		return FocoDTO.builder()
				.codigo(f.getCodigo())
				.nome(f.getNome())
				.build();
	}
}
