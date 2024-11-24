import AxiosConfig from './axios';

class TranslateService extends AxiosConfig {
  constructor() {
    super('translate'); 
  }

  
  async translateText(text, targetLang = 'es') {
    try {
      const response = await this.axios.post('/', { text, targetLang }); 
      return response.data.translatedText;
    } catch (error) {
      console.warn('Error al traducir:', error.response?.data?.error || error.message);
      return text; 
    }
  }
}

const translateService = new TranslateService();
export default translateService;
