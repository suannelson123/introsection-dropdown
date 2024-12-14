import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const App = () => {


  return (
    <>

      <div className='container bg-slate-50'>
        <Navbar />
        <div>
          <Hero />
        </div>
      </div>


    </>
  );
};

export default App;
