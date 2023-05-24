const Pokecard = (props) => {
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  return (
    <div
      className="m-4 p-4 bg-gray-200 rounded min-w-[30%] w-4/6  md:w-1/5 h-64"
      key={props.id}
    >
      <p className="text-center text-2xl font-bold">{props.name}</p>
      <img
        className="ml-auto mr-auto drop-shadow-2xl mt-2 h-40 drop-shadow-2xl"
        src={img}
        alt=""
      />
      <div className="flex w-full justify-between items-baseline shadow-inner rounded">
        <p className=" px-2 rounded font-bold">Exp: {props.exp}</p>
        <p className=" px-2 rounded font-bold">Type: {props.type}</p>
      </div>
    </div>
  );
};

export default Pokecard;
