import AxiosConfig from './axios'; 

class BookService extends AxiosConfig {
  constructor() {
    super('users'); 
  }

  
  getToken() {
    return localStorage.getItem('token'); 
  }

  
  async addBookToFavorites(bookId) {
    const token = this.getToken(); 
    if (!token) {
      throw new Error('No token found, please log in.');
    }

    const response = await this.axios.put(
      `/likebook/${bookId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    return response.data;
  }

  
  async removeBookFromFavorites(bookId) {
    const token = this.getToken(); 
    if (!token) {
      throw new Error('No token found, please log in.');
    }

    const response = await this.axios.delete(`/dislikebook/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  }
}

const bookService = new BookService();
export default bookService;
