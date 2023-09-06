import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    nombre: "",
    talla: 0,
    peso: 0
  });

  const [result, setResult] = useState("");

  const handleChange = (event) => {

    const value = event.target.value;
    const name = event.target.name;
    setForm({...form, [name]: value})
  }

  const hanldeSubmit = async (event) => {

    event.preventDefault();
    setForm(form);

    const imc = parseFloat(Number(form.peso) / (Number(form.talla) * Number(form.talla))).toFixed(2);
    console.log(imc);

    if (imc < 18.5) {

      setResult(form.nombre + " tu IMC es " + imc + " y tu peso es BAJO");
    } else if (imc > 18.4 && imc < 25) {

      setResult(form.nombre + " tu IMC es " + imc + " y tu peso es NORMAL");
    } else if (imc > 24.9 && imc < 30) {

      setResult(form.nombre + " tu IMC es " + imc + " y tu peso es SOBREPESO");
    } else if (imc > 30) {

      setResult(form.nombre + " tu IMC es " + imc + " y tu peso es OBESO");
    }

  }

  return (
    <div className='w-3/4 min-h-[600px] p-3 m-auto flex flex-col gap-2 bg-slate-900 rounded-lg text-white'>
      
      <h3 className='py-4 text-2xl text-center'>Indice de Masa Corporal</h3>

      <img
        className='w-1/2 h-1/2 mx-auto rounded-lg'
        src="https://nutricion360.es/wp-content/uploads/2021/08/imc-saludable-1024x683.jpeg"
        alt="inicio_img" />

        <form
            onSubmit={hanldeSubmit}
            className='w-1/2 mx-auto flex flex-col gap-2 text-black'>

          <input
              name='nombre'
              className='w-full p-2 bg-white rounded-lg'
              placeholder='Ingrese nombre'
              type="text"
              value={form.nombre}
              onChange={handleChange}
              required/>

          <input
              name='talla'
              className='w-full p-2 bg-white rounded-lg'
              placeholder='Ingrese talla'
              type="number"
              value={form.talla}
              onChange={handleChange}
              required/>

          <input
              name='peso'
              className='w-full p-2 bg-white rounded-lg'
              placeholder='Ingrese peso'
              type="number"
              value={form.peso}
              onChange={handleChange}
              required/>

          <input
              className='w-full p-2 bg-cyan-400 hover:bg-cyan-500 rounded-lg font-bold text-lg text-black'
              value="Calcular"
              type="submit" />

        </form>

        <h6 className='w-2/3 py-4 mx-auto text-cyan-400 text-2xl text-center'>
          {result}
        </h6>

    </div>
  )
}

export default App
