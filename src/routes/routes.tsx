import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from '../pages/ProductList'
import Login from '../pages/Login';
import NewProduct from '../pages/ProductList/Form';
import { AlertProvider } from '../hooks/alertHook';
import { AsideBarProvider } from '../hooks/asideBarHook';
import { UserMenuProvider } from '../hooks/userMenuHook';

function Routes() {
    return (
        <AlertProvider>
            <AsideBarProvider>
                <UserMenuProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/productList" exact component={ProductList} />
                            <Route path="/new-product" exact component={NewProduct} />
                        </Switch>
                    </BrowserRouter>
                </UserMenuProvider>
            </AsideBarProvider>
        </AlertProvider>
    );
}

export { Routes }