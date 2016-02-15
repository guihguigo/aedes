/**
 * 
 */
package br.com.aedes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

/**
 * @author GSuaki
 *
 */
@PropertySource(value = { "classpath:/application.properties", "${AEDES_CONFIG_LOCATION}" }, ignoreResourceNotFound = true)
@SpringBootApplication
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ApplicationInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ApplicationInitializer.class);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(ApplicationInitializer.class, args);
	}

}
