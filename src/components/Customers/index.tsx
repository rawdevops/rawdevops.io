import React from "react";
import styles from "./styles.module.css";
import { WhatsApp } from "@mui/icons-material";

const COMPANIES = [
  { image: "/img/consulting/integrasfacil-logo.png", imageDesc: "integrasfacil logo", link: "/consulting/integrasfacil" },
  { image: "/img/consulting/datasolid-logo.jpeg", imageDesc: "datasolid logo", link: "/consulting/datasolid" },
];

export const Customers = () => {
  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className={`${styles.used_by} ${styles.blackBackground}`}>
      <div className="container">
        <div className={`${styles.tagline} ${styles.whiteText} ${styles.centeredContent}`}>
          Nossos clientes <a href="/consulting" style={{ color: "#ffffff" }}>consultoria DevOps</a>
        </div>
        <ul className={`${styles.logoContainer} row`}>
          {COMPANIES.map((company, idx) => (
            <li key={`${idx}-${company.image}`} className="col col--3">
              <img
                src={company.image}
                alt={company.imageDesc}
                onClick={() => handleImageClick(company.link)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div style={{
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "#000000",
        color: "#ffffff",
      }}>
        <div className={styles.buttonWhatsapp} onClick={() => window.open("https://api.whatsapp.com/send?phone=62982654177", "_blank")}>
          <WhatsApp />
          FALE COM UM CONSULTOR
        </div>
      </div>
    </section>
  );
};
