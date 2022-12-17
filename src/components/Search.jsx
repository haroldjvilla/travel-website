import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

function Search() {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>VACACIONES DE LUJO INCLUIDO PARA DOS PERSONAS</h2>
          <p className="py-4">
            Ve a experimentar del espectaculo caribeño con todo incluido
            vacaciones para parejas en hermosos Resorts. Nuestros resorts de
            playa de lujo, ubicado a lo largo de los escenarios tropicales más
            hermosos y playas exquisitas en Cancun, Jamaica, Antigua,
            Bahamas, Granada, Barbados y Curaçao, cuenta con cenas gourmet
            ilimitadas, bares exclusivos que sirven licores y vinos premium, y
            todos los deportes terrestres y acuáticos. Si estás planeando una boda, Arma tu viaje es líder en bodas y paquetes de luna de miel en el Caribe.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">SERVICIO LÍDER</h3>
              <p className="py-1">EMPRESA CON UNA EXPERIENCIA EN EL MERCADO DE 9 AÑOS</p>
            </div>
          </div>
          <div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <a href="https://www.instagram.com/p/Clo94hnvljG/?utm_source=ig_web_copy_link">
              <MdOutlineTravelExplore size={50} />
              </a>
            </button>
            <div>
              <h3 className="py-2">SERVICIO LÍDER</h3>
              <p className="py-1">EMPRESA CON UNA EXPERIENCIA EN EL MERCADO DE 9 AÑOS</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div>
      <div className='border text-center'>
              <p className='pt-2'>OBTÉN UN 10% DE DESCUENTO ADICIONAL</p>
              <p className='py-4'>QUEDAN 12 HORAS</p>
              <p className='bg-gray-800 text-gray-200 py-2'>RESERVA AHORA Y AHORRA</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destino</label>
                  <select className='border rounded-md p-2'>
                      <option>San Andres</option>
                      <option>Cancun</option>
                      <option>Cartagena</option>
                      <option>Madrid</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Tarifas y Disponibilidades</button>
          </form>
      </div>
    </div>
  );
}

export default Search;
