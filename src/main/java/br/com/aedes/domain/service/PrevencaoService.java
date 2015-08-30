package br.com.aedes.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.repository.PrevencaoRepository;

@Service
public class PrevencaoService {
	@Autowired
	private PrevencaoRepository repository;
	
	public List<Prevencao> obterTodos() {
		return (List<Prevencao>) this.repository.findAll();
	}
}
