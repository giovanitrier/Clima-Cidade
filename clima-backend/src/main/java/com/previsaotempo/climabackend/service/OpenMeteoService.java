package com.previsaotempo.climabackend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.previsaotempo.climabackend.dto.*;
import com.previsaotempo.climabackend.util.WeatherCodeMapper;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OpenMeteoService {

    private final RestTemplate restTemplate;

    public OpenMeteoService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public PrevisaoResponseDTO obterPrevisao(double lat, double lon) {

        String url = "https://api.open-meteo.com/v1/forecast"
                + "?latitude=" + lat
                + "&longitude=" + lon
                + "&current_weather=true"
                + "&daily=temperature_2m_max,temperature_2m_min,"
                + "weathercode,wind_speed_10m_max,relative_humidity_2m_max"
                + "&timezone=auto"
                + "&forecast_days=14";

        OpenMeteoResponseDTO response = restTemplate.getForObject(url, OpenMeteoResponseDTO.class);

        DailyDTO daily = response.getDaily();

        // ======================
        // CURRENT WEATHER
        // ======================
        CurrentWeatherOpenMeteoDTO current = response.getCurrentWeather();

        CurrentWeatherDTO climaAtual = new CurrentWeatherDTO();
        climaAtual.setDataHora(LocalDateTime.parse(current.getTime()));
        climaAtual.setTemperatura(current.getTemperature());
        climaAtual.setVento(current.getWindspeed());
        climaAtual.setCondicao(
                WeatherCodeMapper.traduzir(current.getWeathercode()));

        // Complementa com daily[0]
        climaAtual.setTemperaturaMaxima(daily.getTempMax().get(0));
        climaAtual.setTemperaturaMinima(daily.getTempMin().get(0));
        climaAtual.setUmidade(daily.getHumidity().get(0));

        // ======================
        // FORECAST (PRÓXIMOS DIAS)
        // ======================
        List<PrevisaoTempoDTO> forecast = new ArrayList<>();

        // Começa em 1 para NÃO repetir o dia atual
        for (int i = 1; i < daily.getTime().size(); i++) {

            PrevisaoTempoDTO dto = new PrevisaoTempoDTO();
            dto.setData(LocalDate.parse(daily.getTime().get(i)));
            dto.setTemperaturaMaxima(daily.getTempMax().get(i));
            dto.setTemperaturaMinima(daily.getTempMin().get(i));
            dto.setUmidade(daily.getHumidity().get(i));
            dto.setVento(daily.getWind().get(i));
            dto.setCondicao(
                    WeatherCodeMapper.traduzir(daily.getWeatherCode().get(i)));

            forecast.add(dto);
        }

        // ======================
        // RESPONSE FINAL
        // ======================
        PrevisaoResponseDTO resposta = new PrevisaoResponseDTO();
        resposta.setCurrentWeather(climaAtual);
        resposta.setForecast(forecast);

        return resposta;
    }
}
