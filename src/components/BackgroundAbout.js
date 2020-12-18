import "../stylesheets/backgroundAbout.scss";
import PHOTO from "../images/marta.png";

const BackgroundAbout = () => {
  return (
    <section className="backgroundAbout">
      <div className="decorativePolygonAbout"></div>
      <img
        className="about__image"
        src={PHOTO}
        title="Photo Marta Rey"
        alt="Marta Rey"
      />
    </section>
  );
};

export default BackgroundAbout;
