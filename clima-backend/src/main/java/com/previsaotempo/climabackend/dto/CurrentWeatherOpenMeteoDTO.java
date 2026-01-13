package com.previsaotempo.climabackend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrentWeatherOpenMeteoDTO {

    private double temperature;
    private double windspeed;
    private int weathercode;
    private String time;

    public double getTemperature() {
        return temperature;
    }

    public double getWindspeed() {
        return windspeed;
    }

    public int getWeathercode() {
        return weathercode;
    }

    public String getTime() {
        return time;
    }
}
