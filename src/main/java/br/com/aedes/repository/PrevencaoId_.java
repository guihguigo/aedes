package br.com.aedes.repository;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

import br.com.aedes.domain.model.Foco;
import br.com.aedes.domain.model.PrevencaoId;

@StaticMetamodel(value  = PrevencaoId.class)
public class PrevencaoId_ {
	public static volatile SingularAttribute<PrevencaoId, Foco> foco;
}
