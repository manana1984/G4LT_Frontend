import AsyncStorage from '@react-native-async-storage/async-storage';

export const setValueItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log('Error while saving Value Item from Storage', e);
    }
};

export const getValueItem = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log('Error while getting Value Item from Storage', e);
        return null;
    }
};

export const removeValueItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log('Error while removing Value Item from Storage', e);
    }
};

export const setObjectItem = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log('Error while saving Object Item from Storage', e);
        return null;
    }
};

export const removeObjectItem = async (key) => {
    return removeValueItem(key);
};

export const getObjectItem = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('Error while getting Object Item from Storage', e);
        return null;
    }
};
