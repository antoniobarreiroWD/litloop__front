const API_KEY = process.env.REACT_APP_CLOUD_TRANSLATION_API_KEY; 

export const translateText = async (text, targetLang = 'es') => {
  try {
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLang,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error('Error en la solicitud a Google Translate:', errorDetails);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error al traducir el texto:', error);
    return text; 
  }
};
