
import React, { Suspense } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';

const Home = React.lazy(() => import('Containers/Home/Home'));
const ProductDetails = React.lazy(() => import('Containers/ProductDetails/ProductDetails'));
const Login = React.lazy(() => import('Containers/Login/Login'))

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={'Home Page Loading.........'}>
                <Route path="/" exact component={Home} />
            </Suspense>
            <Suspense fallback={'Product Details Page Loading.........'}>
                <Route path="/products/:id" exact component={ProductDetails} />
            </Suspense>
            <Suspense fallback={'Login page Loading.........'}>
                <Route path="/login" exact component={Login} />
            </Suspense>
        </Switch>
    );
};

export default Routes;