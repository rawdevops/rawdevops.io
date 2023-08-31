import React, { useState } from "react";
import { CaretRightFilled, CaretDownFilled } from "@ant-design/icons";

const Card = ({ title, body }: CardProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div
        style={{
          padding: "1rem",
          marginBottom: "0rem",
          marginTop: "0rem",
          marginLeft: "0rem",
          marginRight: "0rem",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          alignItems: "center",
          backgroundColor: "#fffffff",
          borderRadius: "0", 
          color: "#000000",
          textAlign: "center",
          fontSize: "18px",
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
        {isActive && <div className="card__body" dangerouslySetInnerHTML={{__html:body}}>{}</div>}
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  body: string;
}

export default Card;