package br.com.aedes.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.aedes.domain.model.ConversorPercentual;

@Service
public class CalculadorPercentualService {
	@Autowired
	private ConversorPercentual calculador;
	
	
}
