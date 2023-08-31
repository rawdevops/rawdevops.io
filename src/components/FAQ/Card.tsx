import React, { useState } from "react";
import { CaretRightFilled, CaretDownFilled } from "@ant-design/icons";

const Card = ({ title, body }: CardProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          padding: "15px",
          marginBottom: "0.5rem",
          marginTop: "0rem",
          marginLeft: "0rem",
          marginRight: "0rem",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          alignItems: "baseline",
          backgroundColor: "#ffffff",
          borderRadius: "0",
          color: "#000000",
          textAlign: "left",
          fontSize: "18px",
          boxShadow: "none",
          borderBottom: "1px solid",
        }}
        className="card"
        onClick={() => setIsActive((state) => !state)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>{!isActive ? <CaretRightFilled /> : <CaretDownFilled />}</div>

          <div
            style={{
              marginLeft: "0.5rem",
            }}
          >
            {title}
          </div>
        </div>
        {isActive && (
          <div
            className="card__body"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        )}
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  body: string;
}

export default Card;