import React from "react";

const places = [
  { id: "SG", name: "Singapore" },
  { id: "ML", name: "Malayasia" },
  { id: "HK", name: "Hongkong" },
  { id: "TH", name: "Thailand" }
];

const PlaceCard = place => (
  <div className="col-4">
    <div
      className="card"
      key={place.id}
      style={{ width: "200px", height: "100px" }}
    >
      <div className="card-title">{place.name}</div>
    </div>
  </div>
);

function ListCards() {
  return (
    <div>
      <h3>Places in the world I visited</h3>
      <div className="container">{places.map(place => PlaceCard(place))}</div>
    </div>
  );
}

export default ListCards;
