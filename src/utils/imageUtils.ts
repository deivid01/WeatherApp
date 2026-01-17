export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
    });
};

export const getCachedImage = (city: string): string | null => {
    const cached = sessionStorage.getItem(`bg_${city}`);
    return cached;
};

export const setCachedImage = (city: string, url: string): void => {
    try {
        sessionStorage.setItem(`bg_${city}`, url);
    } catch (e) {
        // Ignorar erro se sessionStorage estiver cheio
    }
};
