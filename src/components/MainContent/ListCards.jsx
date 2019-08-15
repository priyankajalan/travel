import React from "react";

const places = [
  { id: "SG", name: "Singapore" },
  { id: "ML", name: "Malayasia" },
  { id: "HK", name: "Hongkong" },
  { id: "TH", name: "Thailand" }
];

// keys help react which item in the list is added or removed and have crucial role
// keys give stable identity to the element
const PlaceCard = place => (
  <div className="col-4" key={place.id}>
    <div className="card" style={{ width: "200px", height: "100px" }}>
      <div className="card-body">
        <h5 className="card-title">{place.name}</h5>
        <p>This is a description</p>
      </div>
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
