package com.previsaotempo.climabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.previsaotempo.climabackend")

public class ClimaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClimaBackendApplication.class, args);
	}

}
