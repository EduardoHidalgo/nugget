import React from "react";
import PaperBase from "../../components/common/PaperBase";
import Title from "../../components/text/Title";
import Fetching from "../fetching/Fetching";

function Pokemons(props) {
  const { data } = props;

  return data.results.map(p => <div key={p.name}>{p.name}</div>);
}

export default function DummySmall() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=964";
  const fallback = <h1>Loading posts...</h1>;
  const fault = <h1>Error loading fetch...</h1>;

  return (
    <PaperBase>
      <Title>This is a sheet of paper.</Title>
      <Fetching url={url} fallback={fallback} fault={fault}>
        <Pokemons />
      </Fetching>
    </PaperBase>
  );
}
