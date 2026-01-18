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

        // Tentar Pixabay API se a chave estiver configurada
        if (config.pixabayApiKey && config.pixabayApiKey !== 'YOUR_PIXABAY_API_KEY') {
            try {
                const query = encodeURIComponent(`${city} city landscape`);
                const response = await fetch(
                    `${config.pixabayApiUrl}?key=${config.pixabayApiKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=1&min_width=1920&safesearch=true`
                );

                if (response.ok) {
                    const data = await response.json();
                    if (data.hits && data.hits.length > 0) {
                        imageUrl = data.hits[0].largeImageURL;
                        setCachedImage(city, imageUrl);
                        return imageUrl;
                    }
                }
            } catch (pixabayError) {
                console.warn('Pixabay API error, using fallback:', pixabayError);
            }
        }

        // Fallback para Source API do Unsplash (sem autenticação necessária)
        const query = encodeURIComponent(`${city} city landscape`);
        imageUrl = `https://source.unsplash.com/1920x1080/?${query}`;
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
