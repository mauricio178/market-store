import React, { useCallback } from 'react'
import DefaultBackgroundHome from '../../components/DefaultBackgroundHome';
import { Container, ContainerTitle, DivTitle } from './styled';
import { FiPlus } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import CardProduct from '../../components/CardProduct';
import { api } from '../../services/api'


export default function ProductList() {

    const history = useHistory()

    const handleGoToNewProduct = () => {
        history.push('/new-product')
    }

    return (
        <DefaultBackgroundHome>
            <ContainerTitle>
                <h1>Produtos</h1>
                <button onClick={handleGoToNewProduct}><FiPlus size="20" />Novo Produto</button>
            </ContainerTitle>
            <Container>
                <DivTitle>
                    <h3>ID</h3>
                    <h3>Nome</h3>
                    <h3>Valor</h3>
                    <h3>Descrição</h3>
                </DivTitle>
                <CardProduct />
                <CardProduct />
            </Container>
        </DefaultBackgroundHome>
    );
}