import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { getWeatherData, getCityBackgroundImage } from './services/weatherService';
import { preloadImage } from './utils/imageUtils';
import { WeatherData } from './types/weather';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Set default background
    setBackgroundImage('https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1600&h=900&fit=crop');
  }, []);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await getWeatherData(city);
      
      if (data.cod === '404' || data.cod === 404) {
        setError('Não foi possível encontrar o clima de uma cidade com este nome.');
        // Reset to default background on error
        setBackgroundImage('https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1600&h=900&fit=crop');
      } else {
        setWeatherData(data);
        
        // Buscar e fazer preload da imagem de fundo
        const bgImage = await getCityBackgroundImage(city);
        
        // Preload para transição suave
        try {
          await preloadImage(bgImage);
          setBackgroundImage(bgImage);
        } catch {
          // Se falhar o preload, usar imagem mesmo assim
          setBackgroundImage(bgImage);
        }
        
        setError(null);
      }
    } catch (err) {
      setError('Erro ao buscar dados do clima. Tente novamente.');
      setBackgroundImage('https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1600&h=900&fit=crop');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="app-overlay"></div>
      <ThemeToggle />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weatherData && !loading && !error && <WeatherCard data={weatherData} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
