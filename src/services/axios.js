import axios from 'axios';

class AxiosConfig {
  constructor(path) {
    this.axios = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/${path}`,
    });
  }
}

export default AxiosConfig;
