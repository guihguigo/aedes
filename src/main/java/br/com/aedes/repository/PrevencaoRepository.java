package br.com.aedes.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.domain.model.PrevencaoId;

public interface PrevencaoRepository extends CrudRepository<Prevencao, PrevencaoId>{
}
