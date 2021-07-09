import React, { useEffect, useRef } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Container, DivProductInfo, DivButton } from './styled';


export default function CardProduct() {

    return (
            <Container>
                <DivProductInfo>
                    <label>007</label>
                    <label>Água Mineral</label>
                    <label>R$2,00</label>
                    <label>Uma garrafa de água 210ml</label>
                </DivProductInfo>
                <DivButton>
                    <button><FiEdit size="14"/></button>
                    <button><FiTrash2 size="14"/></button>
                </DivButton>
            </Container>

    );
}