package br.com.aedes.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.entity.PrevencaoId;

public interface PrevencaoRepository extends JpaRepository<Prevencao, PrevencaoId>,
	JpaSpecificationExecutor<Prevencao>{

	Prevencao findOneByIdCodigoCelularAndIdFocoCodigoAndIdDataCriacao(String codigoCelular, Integer integer, Date dataCriacao);
}
