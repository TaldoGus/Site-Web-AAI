import React from 'react';
import './Home.css'; // Estilos específicos para a página Home
import { useNavigate } from 'react-router-dom'; // Importando o hook de navegação

const Home = () => {
  const navigate = useNavigate(); // Inicializando o hook useNavigate

  // Funções para navegar ao clicar nos botões
  const handleLampModuleClick = () => {
    navigate('/module-lamp'); // Redireciona para a rota do módulo da lâmpada
  };

  const handleCameraModuleClick = () => {
    navigate('/module-camera'); // Redireciona para a rota do módulo da câmera
  };

  const handleAutomationModuleClick = () => {
    navigate('/module-automation'); // Redireciona para a rota do módulo de automação
  };

  return (
    <>
      <div className="home-container">
        <section className="definition">
          <h1>DEFINIÇÃO</h1>
          <p>
            Curso online de capacitação para clientes da empresa <strong>“HomeSphere Automation”</strong> de Automação Residencial.
          </p>
        </section>

        <section className="about-us">
          <div className="TitleQuemSomos">
            <h2>Quem Somos :</h2>
          </div>
          <p>
            Nós da HomeSphere Automation somos uma empresa em crescimento fazendo parte do ramo de automação residencial, disponibilizando nossas tecnologias e produtos buscamos no mercado regional e futuramente nacional expandir nossa base de cliente trazendo maior eficiência tanto tecnológica quanto energética para ambientes domésticos.
          </p>
        </section>

        {/* Texto sobre o curso, seguido pelos cartões descritivos */}
        <section className="course-info">
          <h2>Sobre o curso</h2>
          <div className="course-description">
            <p>Aqui estão descritos os principais módulos oferecidos no curso:</p>
            <div className="course-modules">
              <div className="module-card">Módulos</div>
              <div className="module-card">Tutoriais e Quizzes</div>
              <div className="module-card">Exemplos</div>
              <div className="module-card">FAQ Section</div>
              <div className="module-card">Feedback Section</div>
            </div>
          </div>

          {/* Imagens com os botões "Iniciar" */}
          <div className="course-modules-images">
            <div className="module">
              <img src="light-bulb 1.png" alt="Icone Lamp" />
              <button onClick={handleLampModuleClick}>Iniciar</button> {/* Botão para o módulo da lâmpada */}
            </div>
            <div className="module">
              <img src="smart cam 1.png" alt="Módulo 2" />
              <button onClick={handleCameraModuleClick}>Iniciar</button> {/* Botão para o módulo da câmera */}
            </div>
            <div className="module">
              <img src="home-automation 1.png" alt="Módulo 3" />
              <button onClick={handleAutomationModuleClick}>Iniciar</button> {/* Botão para o módulo de automação */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
