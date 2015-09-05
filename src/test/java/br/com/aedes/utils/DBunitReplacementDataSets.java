package br.com.aedes.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Map;

import org.dbunit.dataset.DataSetException;
import org.dbunit.dataset.ITable;
import org.dbunit.dataset.ReplacementTable;
import org.dbunit.dataset.xml.XmlDataSet;

public class DBunitReplacementDataSets {
	public static void replace(String fileName, Map<String, Object> replacements) throws DataSetException, FileNotFoundException {
		ITable table = new XmlDataSet(new FileInputStream(fileName)).getTable("prevencao");
		ReplacementTable replacementTable = new ReplacementTable(table);
		
		for (String key : replacements.keySet())
			replacementTable.addReplacementObject("${" + key + "}", replacements.get(key));
	}
	
}
	
