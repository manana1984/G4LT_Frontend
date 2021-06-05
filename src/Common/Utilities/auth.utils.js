import { StorageKeyName } from '../Constants/general.constants';
import { getValueItem, removeValueItem, setValueItem } from './storage.utils';

export const getAccessToken = async () => {
    return await getValueItem(StorageKeyName.AccessToken);
};

export const setAccessToken = async (token) => {
    await setValueItem(StorageKeyName.AccessToken, token);
};

export const removeAccessToken = async () => {
    await removeValueItem(StorageKeyName.AccessToken);
};
