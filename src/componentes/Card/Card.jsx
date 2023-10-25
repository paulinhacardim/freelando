import styled from '@emotion/styled'

const DivEstilizada = styled.div`
    padding: ${props => props.theme.espacamentos.l};  
    background: ${props => props.theme.cores.secundarias.a};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    border-radius: ${props => props.theme.espacamentos.s};
`

export const Card = ({ children }) => {
    return (<DivEstilizada>
        { children }
    </DivEstilizada>)
}


// padding: 32px
// border-radius: 16px
// Foram transformados em template literals p fins dinamicos, 
// mudanças na página