import "../stylesheets/about.scss";

const About = () => {
  return (
    <main className="about">
      <h1 className="about__title">Sobre mí</h1>
      <p className="about__text">
        <span className="about__parr">
          Graduada en <strong>Turismo</strong> y apasionada por conocer mundo y
          sus diferentes <strong>culturas y personas</strong>.
        </span>
        <span className="about__parr">
          Mi <strong>perseverancia</strong> y{" "}
          <strong>facilidad de aprendizaje</strong> han sido clave en mi
          trayectoria profesional.
        </span>
        <span className="about__parr">
          He sido coordinadora de equipo en proyectos IT, lo que me ha aportado
          experiencia en <strong>resolución de problemas</strong>,{" "}
          <strong>organización</strong>, <strong>empatía</strong> y
          <strong> motivación de equipos</strong>.
        </span>
        <span className="about__parr">
          Me reinvento en <strong>desarrollo front-end</strong>, que me resulta{" "}
          <strong>apasionante, dinámico e infinito</strong>, y donde puedo
          aplicar las habilidades que he adquirido en mi carrera profesional.
        </span>
      </p>
    </main>
  );
};

export default About;
