import useAsync from 'hooks/useAsync';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from 'redux/actionCreators/cartAction';
import ProductService from 'services/ProductService';
import { IProduct } from 'types';
import imageUrlParse from 'utils/imageUrlParser';

interface IParams {
    id: string;
}

const ProductDetails = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    const getProduct = useCallback(() => {
        return ProductService.getProductById(id);
    }, [id]);

    const {
        data: product,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useAsync<IProduct>(getProduct);

    const { name, description, image, price } = (product || {}) as IProduct;
    const addToCartHandler = (product: IProduct) => {
        dispatch(addToCart(product));
    };

    console.log('product', product);

    return (
        <div className="container bg-white rounded mt-2 py-5">
            {isLoading && <h4> loading........</h4>}
            {isSuccess && (
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={imageUrlParse(image || '')}
                            alt={name}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="product-content">
                            <h5> {name} </h5>
                            <h6>Price: ${price} </h6>
                            <button
                                onClick={() =>
                                    addToCartHandler(product as IProduct)
                                }
                                className="btn btn-danger my-3"
                            >
                                ADD TO CARD
                            </button>
                            <p> {description} </p>
                        </div>
                    </div>
                </div>
            )}
            {isError && <h5> {error} </h5>}
        </div>
    );
};

export default ProductDetails;
