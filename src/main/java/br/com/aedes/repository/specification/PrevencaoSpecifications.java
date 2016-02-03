package br.com.aedes.repository.specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import br.com.aedes.domain.entity.Prevencao;
import br.com.aedes.dto.EnderecoDTO;

public class PrevencaoSpecifications {
	public static Specification<Prevencao> comEndereco(EnderecoDTO endereco) {
		return (root, query, cb) -> {
			
			if (endereco.getBairro() != null) {
				query.where(cb.and(cb.equal(root.get("endereco").get("bairro"), endereco.getBairro())));
			}
			if (endereco.getCidade() != null)
				query.where(cb.and(cb.equal(root.get("endereco").get("cidade"), endereco.getCidade())));
			
			if (endereco.getEstado() != null) {
				query.where(cb.and(cb.equal(root.get("endereco").get("estado"), endereco.getEstado())));
			}
			return query.getRestriction();
		};
	}

	public static Specification<Prevencao> comFoco(Long codigoFoco) {
		return new Specification<Prevencao>() {
			@Override
			public Predicate toPredicate(Root<Prevencao> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
				if (codigoFoco != null) 
					query.where(cb.equal(root.get("id").get("foco").get("codigo"), codigoFoco));
				
				return query.getRestriction();
			}
		};
	}
}
