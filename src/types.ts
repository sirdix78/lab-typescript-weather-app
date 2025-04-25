// src/types.ts

export type Location = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;
};

export type LocationResponse = {
  results?: Location[];
  generationtime_ms: number;
};

export type WeatherResponse = {
  latitude: 52.5;
  longitude: 13.375;
  generationtime_ms: 0.02956390380859375;
  utc_offset_seconds: 0;
  timezone: "GMT";
  timezone_abbreviation: "GMT";
  elevation: 46;
  current_weather_units: {
    time: "iso8601";
    interval: "seconds";
    temperature: "°C";
    windspeed: "km/h";
    winddirection: "°";
    is_day: "";
    weathercode: "wmo code";
  };
  current_weather: {
    time: "2025-04-25T13:15";
    interval: 900;
    temperature: 16.1;
    windspeed: 11.8;
    winddirection: 38;
    is_day: 1;
    weathercode: 1;
  };
};
