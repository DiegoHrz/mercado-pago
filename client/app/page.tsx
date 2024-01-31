import PasarelaPagos from "../components/pasarela-pagos/page";
import PasarelaDonaciones from "../components/pasarela-donaciones/page";


const Home =()=> {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PasarelaPagos/>      
      <PasarelaDonaciones/>
    </main>
  );
}

export default Home;