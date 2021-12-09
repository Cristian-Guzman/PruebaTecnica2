import { types } from "../types/types";


export const mayorPrecio = nombre => ({
    type: types.mayorPrecio,
    payload: {
        nombre
    }
})