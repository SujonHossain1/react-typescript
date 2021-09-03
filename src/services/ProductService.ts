import requests from 'services/httpService';
import { IProduct } from 'types';

class ProductService {
    getProducts(): Promise<IProduct[]> {
        return requests.get('/product');
    }

    getProductById(id: string): Promise<IProduct> {
        return requests.get(`/product/${id}`);
    }

    createProduct(body: object): Promise<IProduct> {
        return requests.patch(`/product/`, body);
    }
    updateProductById(id: string, body: object): Promise<IProduct> {
        return requests.patch(`/product/${id}`, body);
    }
    deleteProductById(id: string): Promise<IProduct> {
        return requests._delete(`/product/${id}`);
    }
}

export default new ProductService();
