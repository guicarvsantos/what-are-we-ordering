import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { AnimationRounded } from '@mui/icons-material'

export const StyledCard = styled(animated.div)`
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 11px 15px 4px rgba(0,0,0,0.12),0px 11px 15px 4px rgba(0,0,0,0.12), 0px 11px 15px 4px rgba(0,0,0,0.12);
    background:linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)), url('https://i.pinimg.com/736x/73/b6/ec/73b6ec844a2c79abbeaa7d6fb8af4d4a.jpg');
    background-size: cover;
    border-radius: 5px;
    &:hover {
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: 0px 11px 15px 7px rgba(0,0,0,0.2),0px 11px 15px 7px rgba(0,0,0,0.2), 0px 11px 15px 7px rgba(0,0,0,0.2);
        z-index: 10;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
 `

export const A = styled(animated.div)`
    position: relative;
    width: 300px;
    height: 100px;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
    padding-left: 32px;
    padding-right: 32px;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2);
    -webkit-user-select: none;
    user-select: none;
`

export const B = styled(animated.div)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
`


export const MerchantHeader = styled('div')`
    font-size: 20px;
    color: white;
    padding: 20px;
    text-align: initial;
 `
const left = {
    bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
    justifySelf: 'end',
}

const right = {
    bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
    justifySelf: 'start',
}

export const Card: React.FunctionComponent = ({ children }: Any) => {
    const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
        x: 0,
        scale: 1,
        ...left,
    }))

    const bind = useDrag(({ active, movement: [x] }) => {
        console.log(x)
        api.start({
            x: active ? x : 0,
            scale: active ? 1.1 : 1,
            ...(x < 0 ? left : right),
            immediate: name => active && name === 'x',
        })
    })

    const avSize = x.to({
        map: Math.abs,
        range: [50, 300],
        output: [0.5, 1],
        extrapolate: 'clamp',
    })

    return (
        <A {...bind()} style={{ background: bg }}>
            <B style={{ scale: avSize, justifySelf }} />
            <StyledCard style={{ x, scale }}>
                {children}
            </StyledCard>
        </A>
    )
 }
