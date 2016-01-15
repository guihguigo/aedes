package br.com.aedes;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author GSuaki
 *
 */
@Order(Ordered.LOWEST_PRECEDENCE)
public class Application extends WebMvcConfigurerAdapter {

//	public static void main(final String[] args) throws Exception {
//		new SpringApplicationBuilder(Application.class).run(args);
//	}
}