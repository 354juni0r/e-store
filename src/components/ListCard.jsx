import React from "react";
import dumData from "../data/DumData";

const ListCard = () => {
  return (
    <div>
      <ul className="card-list">
        {dumData.map((data, id) => (
          <li key={id} className="d-flex marbot">
            <img className="circle-ava" src={data.img} />
            <div className="marlef d-grid item-center">
              <h5 className="color-white">{data.nama}</h5>
              <p className="color-grey">{data.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
