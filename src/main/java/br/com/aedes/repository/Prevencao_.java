package br.com.aedes.repository;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

import br.com.aedes.domain.entity.Endereco;
import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.domain.entity.PrevencaoId;

@StaticMetamodel(Prevencao.class)
public class Prevencao_ {
	 public static volatile SingularAttribute<Prevencao, Endereco> endereco;
	 public static volatile SingularAttribute<Prevencao, PrevencaoId> id;
}
