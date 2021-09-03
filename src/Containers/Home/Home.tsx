import useAsync from 'hooks/useAsync';
import React from 'react';
import ProductService from 'services/ProductService';

const Products = React.lazy(() => import('Containers/Home/Products'));
const Banner = React.lazy(() => import('Containers/Home/Banner'));

const Home = () => {
    const { data, isLoading } = useAsync(ProductService.getProducts);

    return (
        <>
            <React.Suspense fallback={<h4> Loading...</h4>}>
                <Banner />
                <Products isLoading={isLoading} products={data} />
            </React.Suspense>
        </>
    );
};

export default Home;
