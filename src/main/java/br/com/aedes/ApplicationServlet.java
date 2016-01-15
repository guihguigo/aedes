/**
 * 
 */
package br.com.aedes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

@PropertySources({
    @PropertySource("classpath:application.properties"),
    @PropertySource(value = "${AEDES_CONFIG_PATH}", ignoreResourceNotFound = true)
})
@SpringBootApplication
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ApplicationServlet extends SpringBootServletInitializer {

  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    return application.sources(ApplicationServlet.class);
  }

  public static void main(String[] args) throws Exception {
    SpringApplication.run(ApplicationServlet.class, args);
  }
}