import "../stylesheets/landing.scss";

const Landing = () => {
  return (
    <main className="landing">
      <h1 className="landing__title">¡Hola mundo!</h1>
      <p className="landing__text">
        <span className="landing__textOne">Soy Marta,</span>
        <span className="landing__textTwo">desarrolladora front end jr</span>
        <span className="landing__textThree">
          ...y una apasionada de los gatos y el invierno.
        </span>
      </p>
    </main>
  );
};

export default Landing;
