import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AlertProvider } from '../hooks/alertHook';
import { AsideBarProvider } from '../hooks/asideBarHook';
import { UserMenuProvider } from '../hooks/userMenuHook';
import ProductList from '../pages/ProductList'
import Login from '../pages/Login';
import NewProduct from '../pages/ProductList/Form';
import Register from '../pages/Registro';
import ProfileUser from '../pages/ProfileUser';

export function Routes() {
    return (
        <AlertProvider>
            <AsideBarProvider>
                <UserMenuProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/productList" exact component={ProductList} />
                            <Route path="/new-product" exact component={NewProduct} />
                            <Route path="/register" exact component={Register} />
                            <Route path="/profile-user" exact component={ProfileUser} />
                        </Switch>
                    </BrowserRouter>
                </UserMenuProvider>
            </AsideBarProvider>
        </AlertProvider>
    );
}