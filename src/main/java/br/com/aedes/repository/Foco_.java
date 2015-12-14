package br.com.aedes.repository;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

import br.com.aedes.domain.entity.Foco;

@StaticMetamodel(value = Foco.class)
public class Foco_ {
	public static volatile SingularAttribute<Foco, Long> codigo;
}
