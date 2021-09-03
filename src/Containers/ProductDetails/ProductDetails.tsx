import useAsync from 'hooks/useAsync';
import { useParams } from 'react-router';
import ProductService from 'services/ProductService';
import { IProduct } from 'types';
import imageUrlParse from 'utils/imageUrlParser';

interface IParams {
    id: string;
}

const ProductDetails = () => {
    const { id } = useParams<IParams>();
    const {
        data: product,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useAsync<IProduct>(() => ProductService.getProductById(id));
    const { name, description, image, price } = (product || {}) as IProduct;

    const addToCartHandler = (product: IProduct) => {
        console.log(product);
    };

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
                                className="btn btn-danger btn-lg"
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
