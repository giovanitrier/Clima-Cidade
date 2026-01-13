package com.previsaotempo.climabackend.util;

public class WeatherCodeMapper {

    public static String traduzir(int code) {

        return switch (code) {
            case 0 -> "Céu Limpo";
            case 1 -> "Céu Majoritariamente Limpo";
            case 2 -> "Parcialmente Nublado";
            case 3 -> "Nublado";
            case 45 -> "Neblina";
            case 48 -> "Geada";
            case 51, 53, 55 -> "Garoa";
            case 56, 57 -> "Garoa Congelada";
            case 61 -> "Chuva Leve";
            case 63 -> "Chuva Moderada";
            case 65 -> "Chuva Intensa";
            case 66 -> "Chuva Congelada Leve";
            case 67 -> "Chuva congelada Intensa";
            case 71 -> "Queda de neve Leve";
            case 73 -> "Queda de Neve Moderada";
            case 75 -> "Queda de Neve Intensa";
            case 77 -> "Queda de Grãos de Neve";
            case 80 -> "Chuva Passageira Leve";
            case 81 -> "Chuva Passageira Moderada";
            case 82 -> "Chuva Passageira Intensa";
            case 85 -> "Queda de Neve Passageira Leve";
            case 86 -> "Queda de Neve Passageira Intensa";
            case 95 -> "Tempestade";
            case 96, 99 -> "Tempestade com granizo";
            default -> "Indeterminado";
        };
    }
}
