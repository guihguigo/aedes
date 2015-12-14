package br.com.aedes.compose;

import java.util.Calendar;
import java.util.Date;

import br.com.aedes.domain.entity.Endereco;
import br.com.aedes.domain.entity.Foco;
import br.com.aedes.domain.entity.Prevencao;

public class Compose {
	public static Prevencao.PrevencaoBuilder prevencao(boolean isEmDia, Foco foco) {
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MONTH, -1);
		Date criacao = calendar.getTime();
		
		calendar.add(Calendar.DAY_OF_MONTH, 20);
		Date prazo = calendar.getTime();
		
		return Prevencao.builder().id("123", foco, criacao)
			.dataPrazo(prazo)
			.dataEfetuada(isEmDia ? new Date() : null);
	}
	
	public static Foco.FocoBuilder foco(int codigo) {
		return Foco.builder()
				.codigo(codigo)
				.nome("vaso")
				.comoLimpar("Água, esponja e sabão. Depositar areia "
	         +"na vasilha sob o vaso a cada limpeza.");
	}
	
	public static Endereco.EnderecoBuilder endereco() {
		return Endereco.builder()
			.bairro("Jardim Quietude")
			.cidade("Praia Grande")
			.estado("São Paulo");
	}
}
