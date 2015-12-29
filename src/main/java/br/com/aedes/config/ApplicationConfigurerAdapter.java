package br.com.aedes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class ApplicationConfigurerAdapter extends WebMvcConfigurerAdapter {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

		registry.addResourceHandler("/").addResourceLocations("builds/release/index.html");
		registry.addResourceHandler("index.html").addResourceLocations("builds/release/index.html");
		registry.addResourceHandler("styles/**").addResourceLocations("builds/release/styles/");
		registry.addResourceHandler("scripts/**").addResourceLocations("builds/release/scripts/");
		registry.addResourceHandler("assets/**").addResourceLocations("builds/release/assets/");
		registry.addResourceHandler("images/**").addResourceLocations("builds/release/images/");
	}

	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

	@Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setSuffix(".html");
		return resolver;
	}

}
