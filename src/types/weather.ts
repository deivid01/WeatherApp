export interface WeatherData {
    name: string;
    sys: {
        country: string;
    };
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
    };
    weather: Array<{
        description: string;
        icon: string;
        main: string;
    }>;
    wind: {
        speed: number;
    };
    cod?: string | number;
}
