package br.com.aedes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.aedes.domain.entity.Foco;

public interface FocoRepository extends JpaRepository<Foco, Long> {

}
