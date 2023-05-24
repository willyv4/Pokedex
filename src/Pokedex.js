import PokemonData from "./PokemonData";
import Pokecard from "./Pokecard";

const Pokedex = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {PokemonData.map((p) => (
        <Pokecard id={p.id} name={p.name} exp={p.exp} type={p.type} />
      ))}
    </div>
  );
};

export default Pokedex;
