import { Link } from 'react-router-dom';
import { IProduct } from 'types';
import imageUrlParse from 'utils/imageUrlParser';
interface IProps {
    product: IProduct;
}

const Product = ({ product }: IProps) => {
    return (
        <Link to={`/products/${product._id}`} className="col-md-3">
            <div className="card" style={{ height: '100%' }}>
                <img
                    src={imageUrlParse(product.image)}
                    className="card-img-top"
                    alt={product.name}
                />
                <div className="card-body">
                    <h6 className="card-title"> {product.name} </h6>
                    <h6>Price: {product.price}</h6>
                </div>
            </div>
        </Link>
    );
};

export default Product;
