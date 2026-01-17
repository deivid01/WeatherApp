import { config } from '../config';
import { WeatherData } from '../types/weather';
import { getCachedImage, setCachedImage } from '../utils/imageUtils';

export const getWeatherData = async (city: string): Promise<WeatherData> => {
    const apiUrl = `${config.openWeatherApiUrl}?q=${city}&units=metric&appid=${config.openWeatherApiKey}&lang=pt_br`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
};

export const getCityBackgroundImage = async (city: string): Promise<string> => {
    try {
        // Verificar cache primeiro
        const cached = getCachedImage(city);
        if (cached) {
            return cached;
        }

        let imageUrl: string;

        // Tenta usar a API oficial do Unsplash se tiver access key
        if (config.unsplashAccessKey && config.unsplashAccessKey !== 'YOUR_UNSPLASH_ACCESS_KEY') {
            const response = await fetch(
                `${config.unsplashApiUrl}?query=${encodeURIComponent(city + ' city landscape')}&orientation=landscape&per_page=1&client_id=${config.unsplashAccessKey}`
            );

            if (response.ok) {
                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    imageUrl = data.results[0].urls.regular;
                    setCachedImage(city, imageUrl);
                    return imageUrl;
                }
            }
        }

        // Fallback para Source API (sem autenticação necessária)
        imageUrl = `${config.unsplashSourceUrl}?${encodeURIComponent(city)},city,landscape&fit=crop&q=80`;
        setCachedImage(city, imageUrl);
        return imageUrl;
    } catch (error) {
        console.error('Error fetching background image:', error);
        // Fallback para imagem padrão em caso de erro
        return 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1920&h=1080&fit=crop';
    }
};

export const getCountryFlag = (countryCode: string): string => {
    return `${config.flagsApiUrl}${countryCode}/flat/64.png`;
};
