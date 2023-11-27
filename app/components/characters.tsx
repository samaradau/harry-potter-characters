import { getCharacters } from "../api/getCharacters";
import { useQuery } from "react-query";
import { CharacterInfo } from "./character";

export function Characters() {
  const { data, isLoading } = useQuery("getCharacters", () => getCharacters());

  if (isLoading) {
    return "Loading Characters..";
  }

  return (
    <>
      <div className="characters">
        {data?.sort().map((x) => CharacterInfo({ characterInfo: x }))}
      </div>
    </>
  );
}
