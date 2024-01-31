import PasarelaPagos from "../components/pasarela-pagos/pasarela-pagos";
import PasarelaDonaciones from "../components/pasarela-donaciones/pasarela-donaciones";


const Home =()=> {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PasarelaPagos/>      
      <PasarelaDonaciones/>
    </main>
  );
}

export default Home;