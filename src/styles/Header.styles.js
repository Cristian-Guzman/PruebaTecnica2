import styled from 'styled-components'

export const SearchInput = styled.input`
    font-size: 2rem;
`

export const ContenedorHeader = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.2rem;
    @media (max-width: 786px){
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
`

export const SelectOption = styled.option`
    
`