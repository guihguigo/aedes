/**
 * 
 */
package br.com.aedes.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author GSuaki
 *
 */
@Transactional
@RestController
@RequestMapping(value = "/arquivo")
public class ArquivoController {

	@Autowired
	private String filesPath;

	private static final Map<String, String> fileExtensionMap;

	static {
		fileExtensionMap = new HashMap<String, String>();
		fileExtensionMap.put("png", "image/png");
		fileExtensionMap.put("jpeg", "image/jpeg");
		fileExtensionMap.put("jpg", "image/jpeg");
		fileExtensionMap.put("gif", "image/gif");
	}

	@RequestMapping(value = "/{nome}.{extensao}", method = GET)
	public void lerArquivo(HttpServletResponse response, 
			@PathVariable("nome") String nome, @PathVariable("extensao") String extensao) {

		byte[] arquivo = ler(filesPath, nome + "." + extensao);
		InputStream is = new ByteArrayInputStream(arquivo);

		try {
			
			if (fileExtensionMap.containsKey(extensao)) {
				response.setContentType(fileExtensionMap.get(extensao));
			} else {
				response.setContentType("application/octet-stream");
			}
			
			response.getOutputStream().write(IOUtils.toByteArray(is));
			response.getOutputStream().flush();
		} catch (IOException ex) {
			throw new RuntimeException("Falha na leitura do arquivo");
		}
	}

	public byte[] ler(String path, String nome) {
		byte[] result = null;
		
		File file = new File(path + nome);
		
		try {
			result = FileUtils.readFileToByteArray(file);
		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("Não foi possível achar esta imagem no servidor");
		}
		
		return result;
	}

}
