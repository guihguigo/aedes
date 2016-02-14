package br.com.aedes;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author GSuaki
 *
 */
@SpringBootApplication
@Order(Ordered.LOWEST_PRECEDENCE)
public class Application extends WebMvcConfigurerAdapter {

//    public static void main(String[] args) throws Exception {
//        SpringApplication.run(Application.class, args);
//    }

}