package br.com.aedes.domain.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class PrevencaoAgrupadaPorMes extends PrevencoesAgrupadas {
	@Override
	public String getChave() {
		return this.getGrupo().get(0).getMesDataPrazo().toString();
	}

	@Override
	public String getDescricao() {
		Date date = this.getGrupo().get(0).getDataPrazo();
		SimpleDateFormat sdf = new SimpleDateFormat("MMMM", new Locale("pt", "BR"));
		
		return sdf.format(date);
	}
}
