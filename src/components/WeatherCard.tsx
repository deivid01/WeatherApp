import { WeatherData } from '../types/weather';
import { getCountryFlag } from '../services/weatherService';
import './WeatherCard.css';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location">
          <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <h2 className="city-name">{data.name}</h2>
          <img 
            src={getCountryFlag(data.sys.country)} 
            alt={`Bandeira ${data.sys.country}`}
            className="country-flag"
          />
        </div>
      </div>

      <div className="temperature-container">
        <div className="temperature-main">
          <span className="temperature">{Math.round(data.main.temp)}</span>
          <span className="temperature-unit">°C</span>
        </div>
        <div className="weather-icon-container">
          <img 
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt={data.weather[0].description}
            className="weather-icon"
          />
        </div>
      </div>

      <p className="weather-description">{data.weather[0].description}</p>

      <div className="weather-details">
        <div className="detail-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
          <div className="detail-content">
            <span className="detail-label">Umidade</span>
            <span className="detail-value">{data.main.humidity}%</span>
          </div>
        </div>

        <div className="detail-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
          <div className="detail-content">
            <span className="detail-label">Vento</span>
            <span className="detail-value">{data.wind.speed} km/h</span>
          </div>
        </div>

        <div className="detail-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
          </svg>
          <div className="detail-content">
            <span className="detail-label">Sensação</span>
            <span className="detail-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
        </div>
      </div>

      <div className="temp-range">
        <div className="temp-range-item">
          <span className="temp-range-label">Mín</span>
          <span className="temp-range-value">{Math.round(data.main.temp_min)}°C</span>
        </div>
        <div className="temp-range-divider"></div>
        <div className="temp-range-item">
          <span className="temp-range-label">Máx</span>
          <span className="temp-range-value">{Math.round(data.main.temp_max)}°C</span>
        </div>
      </div>
    </div>
  );
};
