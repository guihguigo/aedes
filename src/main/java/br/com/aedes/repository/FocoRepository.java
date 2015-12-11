package br.com.aedes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.aedes.domain.model.Foco;

public interface FocoRepository extends JpaRepository<Foco, Long> {

}
