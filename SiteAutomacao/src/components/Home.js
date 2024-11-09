import React from 'react';
import './Home.css'; // Estilos específicos para a página Home

const Home = () => {
  return (
    <div className="home-container">
      
      <section className="definition">
        <h2>DEFINIÇÃO</h2>
        <p>
          Curso online de capacitação para clientes da empresa <strong>“HomeSphere Automation”</strong> de Automação Residencial.
        </p>
      </section>

      <section className="about-us">
        <div className="TitleQuemSomos">
            <h2>Quem Somos :</h2>
        </div>
        <p>
          Nós da HomeSphere Automation somos uma empresa em crescimento no ramo de automação residencial. 
          Estamos buscando expandir nossa base de clientes com maior eficiência tecnológica e energética para ambientes domésticos.
        </p>
      </section>

      {/* Texto sobre o curso, seguido pelos cartões descritivos */}
      <section className="course-info">
        <h2>Sobre o curso</h2>
        <div className="course-description">
          <p>Aqui estão descritos os principais módulos oferecidos no curso:</p>
          <ul>
            <li>Introdução à Automação Residencial</li>
            <li>Configuração de Dispositivos Inteligentes</li>
            <li>Monitoramento e Controle Remoto</li>
            <li>Integração de Assistentes Virtuais</li>
          </ul>
        </div>

        {/* Imagens com os botões "Iniciar" */}
        <div className="course-modules">
          <div className="module">
            <img src="light-bulb 1.png" alt="Icone Lamp" />
            <button>Iniciar</button>
          </div>
          <div className="module">
            <img src="smart cam 1.png" alt="Módulo 2" />
            <button>Iniciar</button>
          </div>
          <div className="module">
            <img src="home-automation 1.png" alt="Módulo 3" />
            <button>Iniciar</button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="home-footer">
        <p>&copy; 2023 Todos os direitos reservados a HomeSphere Automation</p>
      </footer>
    </div>
  );
};

export default Home;
