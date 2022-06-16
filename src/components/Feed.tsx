import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { DeckContainer } from './Deck';
import { Card, MerchantHeader } from './Card';
import { data } from '../data';


const ImageContainer = styled('div')`
    height: 100%;
    width:100%;
    align-self: strecth;
`

const ButtonsContainer = styled('div')`
    display: flex;
    width:100%;
    justify-content: space-around;
    margin: 5px 0 5px 0;
`
export function Feed() {
    const [count, setCount] = useState(0)
    const [currentMerchant, setMerchant] = useState(data[count])
     
    useEffect(() => {
        setMerchant(data[count % data.length])
        console.log(data[count % data.length])    
    }, [count])
    
    return (
        <DeckContainer>
            <Card onClick={() => {setCount(count + 1)}}>
                <MerchantHeader>
                    {currentMerchant.name}
                </MerchantHeader>
            </Card>
        </DeckContainer>
    )
}