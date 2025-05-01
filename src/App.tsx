import './App.css'
import TarjetaComponent from './components/TarjetaComponent'
import { Tarjeta } from './models/Tarjeta'




function App() {
  let listaTarjetas: Tarjeta[] = []
  
  const tarjeta_1 : Tarjeta ={
    nombre: 'Andres',
    apellido:'Bejarano',
    empresa:'Ceutec',
    telefono:'32321996',
    correo:'abejarano@unitec.edu'
  };
  listaTarjetas.push(tarjeta_1)
  
  const tarjeta_2 : Tarjeta ={
    nombre: 'Rene',
    apellido:'Bejarano',
    empresa:'Ceutec',
    telefono:'87879494',
    correo:'rbejarano@unitec.edu'
  };
  listaTarjetas.push(tarjeta_2)
  
  const tarjeta_3 : Tarjeta ={
    nombre: 'Luis',
    apellido:'Bejarano',
    empresa:'Ceutec',
    telefono:'3434929',
    correo:'lbejarano@unitec.edu'
  };
  listaTarjetas.push(tarjeta_3)
  return (
    <>
    {
      listaTarjetas.map((item, index)=>(
        <TarjetaComponent key={index} nombre={item.nombre} apellido={item.apellido} telefono={item.telefono} empresa={item.empresa} correo={item.correo}></TarjetaComponent>
      ))
    }
    </>
  )
}

export default App
