const getWeatherData = async location => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=e9b6d8a13a940275da5e435e8ab82816&units=metric`,
    );
    const { weather } = await response.json();

    return weather[0].main;
  } catch (e) {
    throw e;
  }
};

export { getWeatherData };
