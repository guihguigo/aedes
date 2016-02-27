package br.com.aedes;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

/**
 * @author GSuaki
 *
 */
@Configuration
@Order(Ordered.LOWEST_PRECEDENCE)
public class ApplicationBeans {

	@Bean
	public String filesPath() {
		return "/images/focos/";
	}
}