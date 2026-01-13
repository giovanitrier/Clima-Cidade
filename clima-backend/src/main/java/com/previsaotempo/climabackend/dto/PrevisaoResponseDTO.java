package com.previsaotempo.climabackend.dto;

import java.util.List;

public class PrevisaoResponseDTO {

    private CurrentWeatherDTO currentWeather;
    private List<PrevisaoTempoDTO> forecast;

    public CurrentWeatherDTO getCurrentWeather() {
        return currentWeather;
    }

    public void setCurrentWeather(CurrentWeatherDTO currentWeather) {
        this.currentWeather = currentWeather;
    }

    public List<PrevisaoTempoDTO> getForecast() {
        return forecast;
    }

    public void setForecast(List<PrevisaoTempoDTO> forecast) {
        this.forecast = forecast;
    }
}
