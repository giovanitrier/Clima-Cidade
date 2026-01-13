package com.previsaotempo.climabackend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OpenMeteoResponseDTO {

    @JsonProperty("current_weather")
    private CurrentWeatherOpenMeteoDTO currentWeather;

    private DailyDTO daily;

    public CurrentWeatherOpenMeteoDTO getCurrentWeather() {
        return currentWeather;
    }

    public DailyDTO getDaily() {
        return daily;
    }
}
