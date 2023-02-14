import React, {useState} from 'react';
import IndiretoFilho from './IndiretoFilho';

export default (props) => {
const [nome , setNome] = useState('?')
const [idade , setIdade] = useState(0)
const [nerd , setNerd] = useState(false)

function FornecerInformacoes(nome, idade, nerd) {
   setNome(nome)
   setIdade(idade)
   setNerd(nerd)
}

    return (
        <>
        <div>
           <span>{nome} </span>
           <span>{idade} </span>
           <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>

        </div>
         <IndiretoFilho quandoClicar={FornecerInformacoes}></IndiretoFilho>
        </>
    )
}