import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { FiCornerDownLeft, FiDollarSign, FiKey, FiPackage } from "react-icons/fi";
import DefaultBackgroundHome from '../../../components/DefaultBackgroundHome';
import { Container, ContainerTitle } from './styled';
import Input from '../../../components/Input';
import ButtonPrimary from '../../../components/ButtonPrimary';
import TextArea from '../../../components/TextArea';
import { api } from '../../../services/api'


export default function NewProduct() {

    async function handleSubmit(){
        try {
            await api.post("/store")
            .then(res => {
                console.log(res)
            })
        } catch (error) {
            console.log('erro na rota')
        }
    }

    const history = useHistory()

    const handleGoToProducts = React.useCallback(() => {
        history.push('/productList')
    }, [history])

    return (
        <DefaultBackgroundHome>
            <ContainerTitle>
                <div>
                    <h1>Produtos /</h1><h1>/ Novo Produto</h1>
                </div>
                <button onClick={handleGoToProducts}><FiCornerDownLeft size="20" />Voltar</button>
            </ContainerTitle>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input icon={FiKey} placeholder="Cód. Produto" type="text" name="cod" />
                    <Input icon={FiPackage} placeholder="Nome do Produto" type="text" name="name" />
                    <Input icon={FiDollarSign} placeholder="Valor Unitário" type="text" name="valor" />
                    <TextArea placeholder="Descrição" type="text" name="fornecedor" />
                    <ButtonPrimary label="Enviar" type="submit" />
                </form>

            </Container>
        </DefaultBackgroundHome>
    );
}