package com.previsaotempo.climabackend.controller;

import org.springframework.web.bind.annotation.*;

import com.previsaotempo.climabackend.dto.PrevisaoResponseDTO;
import com.previsaotempo.climabackend.service.OpenMeteoService;

@RestController
@RequestMapping("/previsao")

public class PrevisaoController {

    private final OpenMeteoService service;

    public PrevisaoController(OpenMeteoService service) {
        this.service = service;
    }

    @GetMapping("/14-dias")
    public PrevisaoResponseDTO obterPrevisao(
            @RequestParam double latitude,
            @RequestParam double longitude) {

        return service.obterPrevisao(latitude, longitude);
    }

    @GetMapping("/teste")
    public String teste() {
        return "API de Previsão do Tempo está funcionando!";
    }
}
