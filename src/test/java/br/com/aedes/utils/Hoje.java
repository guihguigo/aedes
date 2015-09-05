package br.com.aedes.utils;

import java.util.Calendar;
import java.util.Date;

public class Hoje {
	
	/**
	 * Adiciona ou Diminui dias da data de hoje
	 * @param days
	 * @return data alterada
	 */
	public static Date addDias(int days) {
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_MONTH, days);

		return calendar.getTime();
	}
}
