import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
import './WeatherForecast.css';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get('https://localhost:7101/api/weather', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setWeatherData(response.data);
        } catch (error) {
          console.error(error);
          // Handle API errors (e.g., invalid token)
        }
      };

      fetchWeather();
    }
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container mt-5">
        <h2>5-Day Weather Forecast</h2>
        <div className="row">
          {weatherData.map((day) => (
            <div className="col-md-2 mb-3" key={day.date}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{day.day}</h5>
                  <p className="card-text">{day.summary}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Temp: {day.temperatureC}°C / {day.temperatureF}°F
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WeatherForecast;
