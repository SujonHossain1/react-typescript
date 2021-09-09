
import React, { Suspense } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';

const Home = React.lazy(() => import('Containers/Home/Home'));
const ProductDetails = React.lazy(() => import('Containers/ProductDetails/ProductDetails'));
const Login = React.lazy(() => import('Containers/Login/Login'));
const Dashboard = React.lazy(() => import('admin/layout/DefaultLayout'));

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={'Page Loading.........'}>
                <Route path="/" exact component={Home} />
                <Route path="/products/:id" exact component={ProductDetails} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard" name="Home" component={Dashboard} />
            </Suspense>
        </Switch>
    );
};

export default Routes;