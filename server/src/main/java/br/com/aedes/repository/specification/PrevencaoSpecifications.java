package br.com.aedes.repository.specification;

import java.util.ArrayList;
import java.util.List;

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
			List<Predicate> predicates = new ArrayList<>();
			
			if (endereco.getBairro() != null) {
				predicates.add(cb.equal(root.get("endereco").get("bairro"), endereco.getBairro()));
			}
			
			if (endereco.getCidade() != null) {
				predicates.add(cb.equal(root.get("endereco").get("cidade"), endereco.getCidade()));
			}
			
			if (endereco.getEstado() != null) {
				predicates.add(cb.equal(root.get("endereco").get("estado"), endereco.getEstado()));
			}
			
			return andTogether(predicates, cb);
		};
	}

	public static Specification<Prevencao> comFoco(Long codigoFoco) {
		return new Specification<Prevencao>() {
			@Override
			public Predicate toPredicate(Root<Prevencao> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
				List<Predicate> predicates = new ArrayList<>();
				
				if (codigoFoco != null) { 
					predicates.add(cb.equal(root.get("id").get("foco").get("codigo"), codigoFoco));
				}
				
				return andTogether(predicates, cb);
			}
		};
	}
	
	private static Predicate andTogether(List<Predicate> predicates, CriteriaBuilder cb) {
		return cb.and(predicates.toArray(new Predicate[0]));
	}
}
