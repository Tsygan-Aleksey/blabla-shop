import React from "react";

// @ts-ignore
import style from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footerdistributed}>
      <div className={style.footerleft}>
        <p className={style.footerlinks}>
          Autor: Aleksey Tsygan
          <a href="https://github.com/Tsygan-Aleksey">GitHub</a>
          <a href="https://www.linkedin.com/in/aleksey-tsygan-978a6a228/">LinkedIn</a>
        </p>

        <p>Bla-bla shop</p>
      </div>
    </footer>
  );
};
