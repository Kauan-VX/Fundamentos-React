import React from "react";
import DiretoFilho from "./DiretoFilho";

export default props => {
    return (
        <div>
            <DiretoFilho nome="Gilmar" idade={45} nerd={false}/>
            <DiretoFilho nome="Anastacia" idade={60} nerd={true}/>
        </div>
    )
}