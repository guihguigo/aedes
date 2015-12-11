package br.com.aedes.domain.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class PrevencaoAgrupadaPorMes extends PrevencoesAgrupadas {
	@Override
	public String getChave() {
		return this.getGrupo().get(0).getMesDataPrazo().toString();
	}

	@Override
	public String getDescricao() {
//		Integer mesDataPrazo = this.getGrupo().get(0).getMesDataPrazo();
		Date date = this.getGrupo().get(0).getDataPrazo();
		SimpleDateFormat sdf = new SimpleDateFormat("MMMM");
		
//		try {
//			date = sdf.parse(mesDataPrazo.toString());
//			sdf.applyPattern("MMMM");
//		} catch (ParseException e) {
//			throw new RuntimeException("Não foi possível obter o mês por extenso");
//		}
		
		return sdf.format(date);
	}
}
