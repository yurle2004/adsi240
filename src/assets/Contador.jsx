
import { useState } from "react"    
import { Fragment} from  "react"  

function Teclado(props){}
    
function Contador(){

   const[pantalla1]=useState(0)
   const[pantalla2,setvalor]=useState(0)

   
   const Sumar=()=>{setvalor(pantalla2+pantalla1)}
   const Restar=()=>{setvalor(pantalla2-pantalla1)

  
   const uno = (props)=> (
   <div className='Uno' onClick={props.Uno}>
   {props.children}
   </div>
   );
   const dos = (props)=> (
   <div className='dos' onClick={props.dos}>
   {props.children}
   </div>
   );
   const Tres = (props)=> (
      <div className='Uno' onClick={props.Uno}>
      {props.children}
      </div>
      );
   
      
      
   const Dos=()=>{setvalor(2)}}
   const Tres=()=>{setvalor(3)}
   const Cuatro=()=>{setvalor(4)}
   const Cinco=()=>{setvalor(5)}
   const Seis=()=>{setvalor(6)}
   const Siete=()=>{setvalor(7)}
   const Ocho=()=>{setvalor(8)}
   const Nueve=()=>{setvalor(9)}
   const Cero=()=>{setvalor(0)}
   const sumar=()=>{setvalor("+")}
   const restar=()=>{setvalor("-")}
   const Multiplicar=()=>{setvalor("*")}
   const BotonLimpiar= (props) => (
   <div className='BotonLimpiar' onClick={props.BotonLimpiar}>
   {props.children}
   </div>
    );
   const Igual=()=>{setvalor("=")}

    return (
         <Fragment>
        <h1>CONTADOR</h1> 
        <table>
        <button type="button"  onClick={Sumar}>+</button>
        <button type="button"  onClick={Restar}>-</button>
        <button type="button"  onClick={Uno}>1</button>
        <button type="button"  onClick={Dos}>2</button>
        <button type="button"  onClick={Tres}>3</button>
        <button type="button"  onClick={Cuatro}>4</button>
        <button type="button"  onClick={Cinco}>5</button>
        <button type="button"  onClick={Seis}>6</button>
        <button type="button"  onClick={Siete}>7</button>
        <button type="button"  onClick={Ocho}>8</button>
        <button type="button"  onClick={Nueve}>9</button>
        <button type="button"  onClick={Igual}>=</button>

        </table>
        
    

       </Fragment>
    
 )
    }  

export  default Contador