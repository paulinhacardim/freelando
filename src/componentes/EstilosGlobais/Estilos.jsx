import { Global } from "@emotion/react"

const estilos = tema => {
    return {
        html: {
            fontFamily: tema.fontFamily
        },
        body: {
            margin: 0
        }
    }
}


export const Estilos = () => {
    return (< Global  styles={estilos}/>)
}


// linha 4 * = seletor coriga: seleciona tds


// css`= font-family: ${props => props.theme.fontFamily};
    