import { Underdog } from "next/font/google";
import { CharacterInfo } from "../api/getCharacters";

type Params = {
  characterInfo: CharacterInfo;
};

export function CharacterInfo(params: Params) {
  return (
    <>
      <div
        key={params.characterInfo.id}
        className={`character__info${
          params.characterInfo.hogwartsStudent
            ? `--${params.characterInfo.house.toLowerCase()}`
            : ``
        }`}
      >
        <div className="info__name">Name: {params.characterInfo.name}</div>
        <div className="info_house">
          House:{" "}
          {params.characterInfo.hogwartsStudent
            ? params.characterInfo.house
            : "not a student"}
        </div>
        <div className="info_ancestry">
          Ancestry:{" "}
          {params.characterInfo.ancestry === ""
            ? "unknown ancestry"
            : params.characterInfo.ancestry}
        </div>
      </div>
    </>
  );
}
