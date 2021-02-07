import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken = async() => {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:auth`,
    );
    return token ? JSON.parse(token) : [];
  }

  setAccessToken = async(accessToken) => {
    await AsyncStorage.setItem(
      `${this.namespace}:auth`,
      JSON.stringify(accessToken),
    );
  }

  removeAccessToken = async() => {
    await AsyncStorage.removeItem(
      `${this.namespace}:auth`);
  }
}

export default AuthStorage;