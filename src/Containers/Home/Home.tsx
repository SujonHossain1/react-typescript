import Banner from 'Containers/Home/Banner';
import Products from 'Containers/Home/Products';
import useAsync from 'hooks/useAsync';
import ProductService from 'services/ProductService';

const Home = () => {
    const { data, isLoading } = useAsync(ProductService.getProducts);

    return (
        <>
            <Banner />
            {isLoading ? <h6> Loading..... </h6> : <Products products={data} />}
        </>
    );
};

export default Home;
