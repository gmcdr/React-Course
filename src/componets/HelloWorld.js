import Frase from "./Frase";
import SayMyName from "./SayMyName";

function HelloWorld(){

    return (
        <div>
            <SayMyName nome="Gabriel"/>
            <Frase/>
            <h1>Meu primeiro componente</h1>
        </div>
    )
}

export default HelloWorld;