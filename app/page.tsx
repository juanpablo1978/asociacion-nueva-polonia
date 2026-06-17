import Header from "@/components/Header";
import Actividades from "@/components/Actividades";
import Footer from "@/components/Footer";
import Galeria from "@/components/Galeria";
import Agenda from "@/components/Agenda";
import About from "@/components/About";
import Home from "@/components/Home";
import Hero from "@/components/Hero";


const page = () => {

  return (
   <main className="flex min-h-screen flex-col">
    <div id="header"><Header/></div>
     <Hero />
     <div id="inicio"> <Home /> </div>
     <div id="about"> <About /> </div>
     <div id="actividades"> <Actividades /> </div>
     <div id="agenda"> <Agenda /> </div>
     <div id="galeria"> <Galeria /> </div>
     <div id="footer"> <Footer /> </div>
    </main>
  )
}

export default page
