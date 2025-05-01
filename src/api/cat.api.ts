import http from './http';
import type { CatFact } from './types/cat';

const CatService = {
    /**
     * Get a random cat fact
     * @returns Promise with CatFact
     */
    async getRandomFact(): Promise<CatFact> {
        try {
            const response = await http.get<CatFact>('/fact');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch cat fact:', error);
            throw error;
        }
    },

    /**
     * Get multiple cat facts
     * @param limit Number of facts to retrieve (max 30)
     * @returns Promise with array of CatFact
     */
    async getFacts(limit: number = 1): Promise<CatFact[]> {
        try {
            const response = await http.get<{ data: CatFact[] }>(`/facts?limit=${limit}`);
            return response.data.data;
        } catch (error) {
            console.error('Failed to fetch cat facts:', error);
            throw error;
        }
    }
};

export default CatService;