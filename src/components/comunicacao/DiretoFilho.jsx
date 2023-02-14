import React from 'react';

export default (props) => {
    return (
        <div>
        <span>Meu nome é {props.nome}, </span>
        <span>tenho {props.idade} anos </span>
        <span>e meu teste de nerdice deu: <strong>{props.nerd ? 'Verdadeiro' : 'Falso'}</strong></span>
        </div>
    )
}