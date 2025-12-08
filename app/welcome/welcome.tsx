import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
   <>
   {/*Logo */}
   <div className="logo">
      <img src={logoDark} alt="Logo" />
   </div>
   {/*Fin logo */}
   {/*Header*/}
   <div className="header">
      <h1>Tu mejor elección, tus mejores compras</h1>
   </div>
   {/*Fin header*/}
   {/*Creando navbar */}
   <div className="navbar">
      <nav>
         <div className="navbar-content">
            <span className="navbar-link"><a href="">Home</a></span>
            <span className="navbar-link"><a href="">About</a></span>
            <span className="navbar-link"><a href="">Contact</a></span>
         </div>
      </nav>
   </div>
   {/*Fin navbar */}
   </>
  );
}