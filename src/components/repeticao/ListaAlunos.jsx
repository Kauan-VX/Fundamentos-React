import React from 'react';
import alunos from '../../data/alunos';
export default (props) => {

    const alunisLi = alunos.map((aluno) => {
        return (
            <li key= {aluno.id}>
                <strong>{aluno.id})</strong> {aluno.nome} <strong>-></strong> {aluno.nota}
            </li>
        )
    });
    
    return (
        <div>
            <ul>
            {alunisLi}
            </ul>
        </div>
    )
}