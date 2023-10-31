import styled from "@emotion/styled"
import { useState } from "react"

const ItemListaSuspensaEstilizado = styled.li`
    padding: ${props => props.theme.espacamentos.xs} 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.cores.neutras.c};
    cursor: pointer;       
    &:last-child {
        border: none;
    }
    color: ${props => props.focoAtivo ? props.theme.cores.focus : 'inherit'};
    &:hover {
        color: ${props => props.theme.cores.focus};
    }
    
`

const ListaSuspensaEstilizada = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.cores.branco};
    z-index: 1;
    border: 1px solid ${props => props.theme.cores.neutras.a};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    margin: 0;
    padding: 0 ${props => props.theme.espacamentos.m};
    list-style: none;
`
const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`

export const ListaSupensa = ({ titulo, opcoes }) => {
    const [estaAberta, alternarVisibilidade] = useState(false)

    return (<LabelEstilizada>
        {titulo}
        <BotaoEstilizado
             estaAberta={estaAberta}
             onClick={() => alternarVisibilidade(!estaAberta)}
        >
            <div>
                Selecione
            </div>
            <div>
                <span>{estaAberta ? '▲' : '▼'}</span>
            </div>
        </BotaoEstilizado>
        {estaAberta && <ListaSuspensaEstilizada>
            {opcoes.map((opcao) => <ItemListaSuspensaEstilizado
                key={opcao.value}
                >
                {opcao.text}
            </ItemListaSuspensaEstilizado>)}
        </ListaSuspensaEstilizada>}
    </LabelEstilizada>)
}