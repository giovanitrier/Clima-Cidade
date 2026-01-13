package com.previsaotempo.climabackend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DailyDTO {

    private List<String> time;

    @JsonProperty("temperature_2m_max")
    private List<Double> tempMax;

    @JsonProperty("temperature_2m_min")
    private List<Double> tempMin;

    @JsonProperty("wind_speed_10m_max")
    private List<Double> wind;

    @JsonProperty("relative_humidity_2m_max")
    private List<Integer> humidity;

    @JsonProperty("weathercode")
    private List<Integer> weatherCode;

    public List<String> getTime() {
        return time;
    }

    public List<Double> getTempMax() {
        return tempMax;
    }

    public List<Double> getTempMin() {
        return tempMin;
    }

    public List<Double> getWind() {
        return wind;
    }

    public List<Integer> getHumidity() {
        return humidity;
    }

    public List<Integer> getWeatherCode() {
        return weatherCode;
    }
}
