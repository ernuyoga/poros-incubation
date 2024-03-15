import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.container}>
      <img
        className={style.img}
        src="https://porosfilkom.ub.ac.id/logo-poros.svg"
        alt="Logo Poros"
      />
      <h1 className={style.h1}>
        Incubation <br />
        Week 2
      </h1>
    </div>
  );
}

export default NavBar;
