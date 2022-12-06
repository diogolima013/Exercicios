import React from 'react'
import ReactDOM from 'react-dom'

//componente sempre importar com letra Maiuscúla
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
   <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
         </Pai>
   </div>
, document.getElementById('root'))