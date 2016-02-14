package br.com.aedes;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author GSuaki
 *
 */
//@PropertySources({
//    @PropertySource(value = "${SPRING_CONFIG_PATH}", ignoreResourceNotFound = true),
//    @PropertySource("classpath:application.properties")
//})
@SpringBootApplication
@EnableAutoConfiguration
@EnableConfigurationProperties
@Order(Ordered.HIGHEST_PRECEDENCE)
public class Application extends WebMvcConfigurerAdapter {

	public static void main(final String[] args) throws Exception {
		new SpringApplicationBuilder(Application.class).run(args);
	}
}