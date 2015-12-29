package br.com.aedes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.aedes.domain.entity.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long>{
	@Query("select distinct e.estado from endereco e order by e.estado")
	List<String> listarEstados();

	@Query("select distinct e.cidade from endereco e where e.estado = ?1 order by e.cidade")
	List<String> listarCidadesPorEstado(String estado);

	@Query("select distinct e.bairro from endereco e where e.cidade = ?1 and e.estado = ?2 order by e.bairro")
	List<String> listarBairrosPorCidadeEEstado(String cidade, String estado);
}
