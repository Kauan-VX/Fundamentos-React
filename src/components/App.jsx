import React from 'react';
import Card from './layout/Card';
import Aleatorio from './basicos/Aleatorio';
import "./App.css"
import Familia from './basicos/Familia'
import FamiliaMembro from './basicos/FamiliaMembro';
import ListaAlunos from './repeticao/ListaAlunos';
import TabelasProdutos from './repeticao/TabelasProdutos';
import ParOuImpar from './condicional/ParOuImpar';
import UsuarioInfo from './condicional/UsuarioInfo';
import DiretoPai from './comunicacao/DiretoPai';
import IndiretoPai from './comunicacao/IndiretoPai';
import Input from './formulario/Input';
import Contador from './contador/Contador';
import Mega from './mega/Mega';

export default () =>{
    return (
<div id='App'>
    <h1>Fundamentos React</h1>
    <div id="Cards">
   <Card titulo="Número Aleatórios #1" color="#FA6900">
<Aleatorio min={1} max={3}/>
</Card>

<Card titulo="Componte com Filhos #2" color="#00C8F8">
<Familia sobrenome="Ferreira">
<FamiliaMembro nome="Kauan"/>
<FamiliaMembro nome="Kauany"/>
<FamiliaMembro nome="Beatriz"/>
    </Familia>
</Card>

<Card titulo="Repetição #3" color="#6B5B95">
<ListaAlunos/>
</Card>

<Card titulo="Produtos #4" color="#6B1B60">
<TabelasProdutos/>
</Card>

<Card titulo="Condicional #5" color="#3B5B20">
<ParOuImpar numero={20}></ParOuImpar>
<UsuarioInfo usuario={{ nome: 'Kauan'}}/>
</Card>

<Card titulo="Comunicação Direta #6" color="#660126">
<DiretoPai></DiretoPai>
</Card>

<Card titulo="Comunicação Indireta #7" color="#820261">
<IndiretoPai/>
</Card>

<Card titulo="Componente Controlado (Input) #8" color="#130866">
<Input></Input>
</Card>

<Card titulo="Contador #9" color="#1A5C10">
<Contador numeroInicial={10} passoInicial={10}/>
</Card>

<Card titulo="Mega #10" color="#6F5D50">
<Mega qtde={8}/>
</Card>

</div>
</div>
    )
};