import React from 'react';
import produtos from "../../data/produtos";


export default (props)  => {
function getLinhas() {
    return produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id})</td>
                <td>{produto.produto}</td>
                <td>R${produto.preço}</td>
            </tr>
        )
    })
}


return (
<div className='TabelaProdutos'>
    <table border="1">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
        </thead>
        <tbody>
         {getLinhas()}
        </tbody>
    </table>
    </div>
)
}