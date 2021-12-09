import React, { useCallback, useEffect, useState } from 'react'
import db from '../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { Card, CardBtn, CardImg, CardInfo, Cards } from '../styles/Home.styles'

const Home = () => {
    let datos = [];
    let precioProducto = [];
    const [Datos, setDatos] = useState([]);
    const [idDatos, setIdDatos] = useState([]);
    const [Precio, setPrecio] = useState([])
    
    useEffect(() => {
        const getData = async() => {
            const data = await getDocs(collection(db, "productos"))
            data.docs.forEach(e => {
                datos.push(e.data())
            })
            setDatos(datos)
            setIdDatos(data.docs)
            
        }
        getData()
}, [])

const precioPer = useCallback(() => {  
    if (precioProducto.length === 9) {
        return precioProducto
    } else {
        return 0
    }},[Precio])

// useEffect(() => {
//     setPrecio(precioPer())
// }, [precioProducto])
// useEffect(() => {
//     console.log(Precio)     
// }, [Precio])

    return (
        <>
            <Cards>
                {
                    Datos.length === 9 && Datos.map(({nombre, precio, referencia, imagen}, index) =>{
                        if (Datos.length < 10) {
                             precioProducto.push(Datos[index].precio);
                        }
                    return idDatos.length === 9 &&(
                        <Card key={idDatos[index].id}>
                            <CardImg src={imagen} />
                            <CardInfo>
                                <h1>{nombre}</h1>
                                <p style={{fontWeight: "900"}}>R$ {precio.toFixed(2)}</p>
                                <p>{referencia}</p>
                            </CardInfo>
                            <CardBtn>Comprar</CardBtn>
                        </Card>) 
                    })
                }
            </Cards>
        </>
    )
}

export default Home
