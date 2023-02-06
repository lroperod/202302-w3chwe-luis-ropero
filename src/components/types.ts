interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;

export interface PokemonStructure {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: Array<{ type: { name: string } }>;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
