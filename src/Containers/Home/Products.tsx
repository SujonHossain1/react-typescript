import Product from 'Components/Common/Product';
import ProductSkeleton from 'skeleton/ProductSkeleton';
import { IProduct } from 'types';

interface IProps {
    products: IProduct[] | null;
    isLoading: boolean;
}

const Products = ({ products, isLoading }: IProps) => {
    return (
        <div className="container">
            <div className="row g-3 mt-5">
                <h3>Products</h3>
                {isLoading
                    ? Array(12)
                          .fill('_')
                          ?.map((item, index) => (
                              <ProductSkeleton key={index} />
                          ))
                    : products?.map((product) => (
                          <Product key={product._id} product={product} />
                      ))}
            </div>
        </div>
    );
};

export default Products;
