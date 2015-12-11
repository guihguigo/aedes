package br.com.aedes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.domain.model.PrevencaoId;

public interface PrevencaoRepository extends JpaRepository<Prevencao, PrevencaoId>,
	JpaSpecificationExecutor<Prevencao>{
}
