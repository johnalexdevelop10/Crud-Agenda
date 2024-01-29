import React from "react";

export const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark gb-dark'>
          <div>
            <a href="/" className='navbar-brand'>
              Gestion Clientes
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
