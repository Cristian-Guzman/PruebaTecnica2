import React from 'react'
import { ContenedorHeader, SearchInput, SelectOption } from '../styles/Header.styles'

const Header = () => {
    return (
        <>
            <ContenedorHeader>
               <SearchInput type="text" />
               <select style={{width: "10rem", height: "3.3rem"}}>
                   <SelectOption value="Ordenar Por:">Ordenar Por:</SelectOption>
                   <SelectOption value="Menor precio">Menor precio</SelectOption>
                   <SelectOption value="Mayor precio">Mayor precio</SelectOption>
               </select>
            </ContenedorHeader>
        </>
    )
}

export default Header
