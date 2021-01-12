import "../stylesheets/background.scss";

const Background = (props) => {
  const idPolygons = [];
  for (let i = 0; i < 20; i++) {
    idPolygons.push(i);
  }
  const randomNumber = () => {
    return Math.random(100) * 100;
  };
  const randomNumberSecs = () => {
    return 10 + Math.random(30) * 100;
  };

  const backgroundPolygonsPink = idPolygons.map((id) => {
    const stylePolygons = {
      top: randomNumber() + "vh",
      left: randomNumber() + "vw",
      animationDuration: randomNumberSecs() + "s",
    };
    return (
      <div
        key={id}
        aria-label="decoration"
        style={stylePolygons}
        className={"decorativeMiniPolygonsPink decorativeMiniPolygonsPink" + id}
      ></div>
    );
  });

  const backgroundPolygonsGreen = idPolygons.map((id) => {
    const stylePolygons = {
      top: randomNumber() + "vh",
      left: randomNumber() + "vw",
      animationDuration: randomNumberSecs() + "s",
    };
    return (
      <div
        key={id}
        aria-label="decoration"
        style={stylePolygons}
        className={
          "decorativeMiniPolygonsGreen decorativeMiniPolygonsGreen" + id
        }
      ></div>
    );
  });
  return (
    <>
      {props.accesible ? (
        <section></section>
      ) : (
        <section className="decorativeBackground">
          {backgroundPolygonsPink}
          {backgroundPolygonsGreen}
          <div aria-label="decoration" className="decorativePolygon"></div>
          <div aria-label="decoration" className="decorativePolygonTwo"></div>
          <div aria-label="decoration" className="decorativePolygonThree"></div>
          <div aria-label="decoration" className="decorativePolygonFour"></div>
          <div aria-label="decoration" className="decorativePolygonFive"></div>
          <div aria-label="decoration" className="decorativePolygonSix"></div>
        </section>
      )}
    </>
  );
};

export default Background;
