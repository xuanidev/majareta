const EXPIRATION_TIME = 3600000; // 1 hora en milisegundos

export const setItemWithExpiration = (key: string, value: string) => {
    const item = {
        value: value,
        expiry: Date.now() + EXPIRATION_TIME,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

export const getItemWithExpiration = (key: string) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const isExpired = Date.now() > item.expiry;
    if (isExpired) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
};

export const removeItem = (key: string) => {
    localStorage.removeItem(key);
};

// Nuevo método sin expiración
export const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

export const getItem = (key: string) => {
    return localStorage.getItem(key);
};
