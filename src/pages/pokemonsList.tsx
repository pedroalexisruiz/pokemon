import React, { useEffect, useState } from "react";
import { Pokemon } from "../domain/model/Pokemon";
import { Title } from "../components/Title";
import { useTranslation } from "react-i18next";

const CharactersTable = React.lazy(
  () => import("RickAndMorty/CharactersTable")
);
const CharacterItem = React.lazy(() => import("RickAndMorty/CharacterItem"));
const Thumbnail = React.lazy(() => import("RickAndMorty/Thumbnail"));

const PokemonsList = ({
  pokemonsList,
  getPokemonsList,
  pagesQuantity,
}: PokemonsListProps) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const loadCharactersByPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    getPokemonsList(pageNumber);
  };
  const tableHeaders = [
    t("characters.name"),
    t("characters.dimensions"),
    t("characters.type"),
    t("characters.image"),
  ];
  useEffect(() => {
    getPokemonsList(currentPage);
  }, []);

  return (
    <div>
      <Title>{t("title")}</Title>
      {pokemonsList.length ? (
        <CharactersTable
          headers={tableHeaders}
          currentPage={currentPage}
          lastPage={pagesQuantity}
          setPage={loadCharactersByPage}
        >
          {pokemonsList.map((character: Pokemon, index: number) => {
            return (
              <CharacterItem
                cells={[
                  <p>{character.name}</p>,
                  <p>
                    {character.height} X {character.weight}
                  </p>,
                  <p>{character.types[0].name}</p>,
                  <Thumbnail
                    alt={character.name}
                    src={character.frontDefault}
                  />,
                ]}
                key={`character-${index}`}
              />
            );
          })}
        </CharactersTable>
      ) : null}
    </div>
  );
};

export interface PokemonsListProps {
  pokemonsList: Pokemon[];
  getPokemonsList: (pageNumber?: number) => void;
  pagesQuantity: number;
}

export default PokemonsList;
