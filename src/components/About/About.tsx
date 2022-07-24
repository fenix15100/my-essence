import images from '../../images/images.js'
const About = ()=>{
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, mi nombre es Fran
          </h1>
          <p className="mb-8 leading-relaxed">
            Lo que más me llamo la atención sobre el mundo IT es la capacidad que tiene para poder conectar a las personas y hacerles la vida un poco más fácil, creo que así es como me enamoré de la programación y comencé a aportar mi granito de arena.
          </p>
          <p>
            Tengo un largo recorrido como Senior Backend Developer,
            me consideran experto en diseño, implementación y orquestación de APIs, también poseo mucha experiencia en roles de Data Engineer y Data Architect.
            <br/>
            Por último tengo que mencionar mi experiencia en la administración y desarrollo de herramientas ERP/CRM tales como Suite CRM o Oddo.
          </p>
          <br/>
          <p>
            Resumiendo, soy experto en las integraciones de datos, automatizar procesos y la comunicación de sistemas ya sea vía Apis o con scripting.
          </p>
          <br/>
          <p>
            Mis compañeros de viaje principales son Python/PHP/Javascript/Bash y SQL con ellos he construido grandes aplicaciones.
          </p>
          <br/>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja Conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Problemas que he resuelto
            </a>
          </div>
        </div>
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={images.self}/>
        </div>

      </div>
    </section>
  );
}
export default About;