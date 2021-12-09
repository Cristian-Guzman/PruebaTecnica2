import styled from 'styled-components'

export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`

export const Card = styled.article`
    width: 10rem;
    display: flex;
    margin: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
`

export const CardImg = styled.img`

`

export const CardInfo = styled.div`
    /* display: flex;
    align-items: center; */
`

export const CardBtn = styled.button`
    padding: 1.5rem 4rem;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    border: none;
    cursor: pointer;
`