const getWeatherData = async location => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
    );
    const { weather } = await response.json();

    return weather[0].main;
  } catch (e) {
    throw e;
  }
};

export { getWeatherData };
