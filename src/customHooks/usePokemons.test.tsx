/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import { renderHook, act } from "@testing-library/react-hooks";
import { usePokemon } from "./usePokemons";
import pokemonJson from "../mocks/pokemon.json";
import { FetchMock } from "jest-fetch-mock";
import { cleanup, waitFor } from "@testing-library/react";
require("isomorphic-fetch");

const fetch = global.fetch as FetchMock;

describe("Use pokemons hook test", () => {
  afterEach((): void => {
    fetch.resetMocks();
    cleanup();
  });

  beforeEach((): void => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(pokemonJson));
  });

  test("should use pokemons", () => {
    //ARRANGE
    const pokemonsQuantity = 0;
    const pagesQuantity = 20;
    //ACT
    const { result } = renderHook(() => usePokemon());

    //ASERT
    expect(result.current.pokemonsList.length).toBe(pokemonsQuantity);
    expect(result.current.pagesQuantity).toBe(pagesQuantity);
    expect(typeof result.current.getPokemonsList).toBe("function");
  });

  test("should get pokemons", async () => {
    //ARRANGE
    const charactersQuantity = 20;
    const pagesQuantity = 20;

    //ACT
    const { result } = renderHook(() => usePokemon());
    act(() => {
      result.current.getPokemonsList();
    });

    //ASERT
    await waitFor(() =>
      expect(result.current.pokemonsList.length).toBe(charactersQuantity)
    );
  });
});
