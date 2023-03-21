
import './App.css';



function App() {

  return (
    <div className='App p-32 bg-white'>
      <Card
        title='Taladro/Atornillador Inalambrico 12V 650W'
        precio={34300}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eoeO1jLB6-MITW8h2uHEA9y0BnrGTsqHy2YO0GnRdkG52vE-kfw3EAz79H34gNRo2i4&usqp=CAU"
        promocion="En x6 cuotas sin interes"
        h="V"
      >
      </Card>

      <Card
        title='Taladro/Atornillador Inalambrico 12V 650W'
        precio={34300}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eoeO1jLB6-MITW8h2uHEA9y0BnrGTsqHy2YO0GnRdkG52vE-kfw3EAz79H34gNRo2i4&usqp=CAU"
        promocion="En x6 cuotas sin interes"
        descuento="50000"
        h="H"
      >
      </Card>
    </div>
  );
}

export default App;


const Card = (props) => {
  const { img, precio, title, promocion, descuento, h } = props;
  const formato = new Intl.NumberFormat('es-AR')
  // const h = 'H';
  return (
    <div className={`card  max-w-xl bg-white shadow-xl rounded-l-xl ${h == 'V' ? "w-80" : ""}`}>
      <div className={h == 'V' ? '' : 'flex max-w-xl'}>
        <div className={h == 'V' ? 'h-80 rounded-t-xl' : ''}>
          <figure className={h == 'V' ? 'rounded-t-xl  h-full' : 'rounded-t-xl h-full'}><img className='h-full object-cover' src={img} alt="Shoes" /></figure>
        </div>
        <div>
          <div className="card-body text-left">
            <h2 className="card-title text-black">{title}</h2>
            <p className='text-black mt-3 text-2xl font-bold'>$ {formato.format(precio)} {descuento && <span className='text-lg line-through font-normal text-orange-500'>${formato.format(descuento)}</span>}</p>
            {promocion && <span className='text-orange-500 text-lg'>{promocion}</span>}
          </div>
          <button className='btn bg-orange-500 border-none  mb-5 w-10/12'>
            <p className='text-center text-white'>Agregar al carrito</p>
          </button>
        </div>
      </div>
    </div>

  )
}


