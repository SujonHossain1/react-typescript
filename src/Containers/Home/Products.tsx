import Product from 'Components/Common/Product';
import { IProduct } from 'types';

interface IProps {
    products: IProduct[] | null;
}

const Products = ({ products }: IProps) => {
    return (
        <div className="container">
            <div className="row g-3 mt-5">
                <h3>Products</h3>
                {products?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
