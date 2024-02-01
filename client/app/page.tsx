import PasarelaPagos from "../components/pasarela-pagos/pasarela-pagos";
import PasarelaDonaciones from "../components/pasarela-donaciones/pasarela-donaciones";
import Pasarela from './pasarela-ecommerce/pasarela-ecommerce'

const Home =()=> {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <PasarelaPagos/>      
      <PasarelaDonaciones/> */}

      <Pasarela/>
    </main>
  );
}

export default Home;