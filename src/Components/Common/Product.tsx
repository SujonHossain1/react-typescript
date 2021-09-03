import { IProduct } from 'types';
import imageUrlParse from 'utils/imageUrlParser';

interface IProps {
    product: IProduct;
}

const Product = ({ product }: IProps) => {
    return (
        <div className="col-md-3">
            <div className="card">
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
        </div>
    );
};

export default Product;
