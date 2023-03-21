
import './App.css';



function App() {

  return (
    <div className='App p-32 bg-white'
   
    >
    
     <ScrollPanel
      titulo="Oferta Limitada"
      tituloLink="Ver Todas"
      urlLink="/productos/"
     >
     <Card
        title='Taladro/Atornillador Inalambrico 12V 650W'
        precio={34300}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eoeO1jLB6-MITW8h2uHEA9y0BnrGTsqHy2YO0GnRdkG52vE-kfw3EAz79H34gNRo2i4&usqp=CAU"
        promocion="En x6 cuotas sin interes"
        descuento="50000"
        h="H"
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

     </ScrollPanel>





{/* 
      <Card
        title='Taladro/Atornillador Inalambrico 12V 650W'
        precio={34300}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eoeO1jLB6-MITW8h2uHEA9y0BnrGTsqHy2YO0GnRdkG52vE-kfw3EAz79H34gNRo2i4&usqp=CAU"
        promocion="En x6 cuotas sin interes"
        descuento="50000"
        h="H"
      >
      </Card> */}
    </div>
  );
}

export default App;

const ScrollPanel=({children, titulo, urlLink, tituloLink})=>{

  return(
    <div className='p-4'>
    <div className='flex justify-between m-5'>
      <h1 className='text-black font-bold text-2xl'>{titulo}</h1>

      <span className='text-orange-500 font-bold'>
      <a href={urlLink}>{tituloLink}</a>
      </span>
  </div>
  <div className='flex gap-3 overflow-x-auto'>
  {
    children
  }
  </div>
 </div>
  )
}


const Card = (props) => {
  const { img, precio, title, promocion, descuento, h } = props;
  const formato = new Intl.NumberFormat('es-AR')
  // const h = 'H';
  return (
    <div className={`card shadow-2xl m-6 ${h === 'V' ? "w-80 " : ""}`}>
      <div className={h === 'V' ? '' : 'flex flex-row rounded-r-2xl'}>
        <div className={h === 'V' ? 'h-52 ' : 'basis-1/2 rounded-l-2xl w-80'}>
          <figure className={h === 'V' ? 'h-full' : 'min-h-min w-full h-full'}>
            <img className={`h-full w-full object-cover ${h === 'V' ?'rounded-t-2xl':'rounded-l-2xl'}`} src={img} alt="Shoes" />
            </figure>
        </div>
        <div className={`basis-1/2  ${h==='V'?'rounded-b-2xl':'rounded-r-2xl'}`}>
          <div className="card-body text-left ">
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


