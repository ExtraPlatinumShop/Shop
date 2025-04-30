const API_KEY = 'f6aa211ec2967b017cb48045f7d8f99f';
const API_URL = 'https://api.novaposhta.ua/v2.0/json/';

interface NovaPoshtaResponse {
  success: boolean;
  data: any[];
  errors: any[];
  warnings: any[];
  info: any[];
}

interface Warehouse {
  Ref: string;
  Description: string;
  CityRef: string;
  Number: string;
}

export const novaPoshtaService = {
  async getCities(query: string): Promise<any[]> {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: API_KEY,
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: {
            CityName: query,
            Limit: 10,
          },
        }),
      });
      console.log(response);
      const data: NovaPoshtaResponse = await response.json();
      console.log('NovaPoshta API response:', data);
      return data.data[0]?.Addresses || [];
    } catch (error) {
      console.error('Помилка при отриманні міст:', error);
      return [];
    }
  },

  async getWarehouses(cityRef: string, streetQuery: string = ''): Promise<Warehouse[]> {
    if (!cityRef) {
      alert('Не вдалося знайти відділення для цього міста');
      return [];
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: API_KEY,
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityRef: cityRef,
            ...(streetQuery ? { FindByString: streetQuery } : {}),
          },
        }),
      });

      const data: NovaPoshtaResponse = await response.json();
      
      return data.data || [];
    } catch (error) {
      console.error('Помилка при отриманні відділень:', error);
      return [];
    }
  },
}; 