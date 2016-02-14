package br.com.aedes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class ApplicationConfigurerAdapter extends WebMvcConfigurerAdapter {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

		registry.addResourceHandler("styles/**").addResourceLocations("builds/release/styles/").setCachePeriod(0);
		registry.addResourceHandler("scripts/**").addResourceLocations("builds/release/scripts/").setCachePeriod(0);
		registry.addResourceHandler("assets/**").addResourceLocations("builds/release/assets/").setCachePeriod(0);
		registry.addResourceHandler("images/**").addResourceLocations("builds/release/images/").setCachePeriod(0);
		registry.addResourceHandler("font/**").addResourceLocations("builds/release/font/").setCachePeriod(0);

		super.addResourceHandlers(registry);
	}
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
	    registry.addViewController("/").setViewName("forward:builds/release/index.html");
	    
	    super.addViewControllers(registry);
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
