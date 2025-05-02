const LOCAL_PROXY_URL = '/api/ukrposhta-offices';

export const ukrposhtaService = {
  async getOffices(city: string, search: string = ''): Promise<any[]> {
    try {
      const url = `${LOCAL_PROXY_URL}?city=${encodeURIComponent(city)}${search ? `&search=${encodeURIComponent(search)}` : ''}`;
      const response = await fetch(url);
      if (!response.ok) return [];
      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error('Помилка при отриманні відділень Укрпошти:', error);
      return [];
    }
  }
}; 