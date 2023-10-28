import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "./api";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        console.log("Returned data:", action.payload);
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const WeatherBox = () => {
  console.log("WeatherBox");
  const { data, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  console.log("Data:", data);

  useEffect(() => {
    console.log("useEffect in WeatherBox is running");
    const apiKey = "747437950a0e03127e6322fe156f65c1";
    const endpoint =
      "https://api.openweathermap.org/data/2.5/weather?lat=53.21&lon=6.56&lang=nl&appid=" +
      apiKey;
    console.log("About to dispatch fetchWeatherData");
    dispatch(fetchWeatherData(endpoint));
    console.log("Endpoint", endpoint);
  }, [dispatch]);

  console.log("Data:", data);

  let iconCode, iconUrl;
  if (data && data.weather && data.weather.length > 0) {
    iconCode = data.weather[0].icon;
    iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }
  return (
    <div className="weather-box">
      {data ? (
        <p>
          Huidig weer: {data.weather[0].description}
          <img src={iconUrl} alt="Weather icon" /> <br />
          {Math.round(data.main.temp - 273.15)}°C
        </p>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default weatherSlice.reducer;
