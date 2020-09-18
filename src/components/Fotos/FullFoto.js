import React from "react";
import {fotos} from "./Fotos";
import {RenderIf} from "../../renderIf";

const FullFoto = (props) => {
    const foto = fotos.find(foto => foto.id === +props.match.params.id);

    return (
        <div className="full-foto-wrapper" 
             onClick={(e) => Array.from(e.target.classList).includes("full-foto-wrapper") ? props.history.goBack() : false}
        >
            <RenderIf condition={foto.path}>
                <img className="full-foto" src={foto.path} alt=""/>
            </RenderIf>
        </div>
    )
}

export default FullFoto;