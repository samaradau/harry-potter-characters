import { UUID } from "crypto";
import { BASE_API_URL } from "./config";

export type CharacterInfo = {
  id: UUID,
  name: String,
  house: String,
  ancestry: String
  hogwartsStudent: Boolean
}

export function getCharacters(): Promise<CharacterInfo[]> {
  return fetch(`${BASE_API_URL}/api/characters`)
    .then<any[]>(r => r.json())
    .then<CharacterInfo[]>(data => data.map<CharacterInfo>(x =>
      ({
      id: x.id,
      name: x.name,
      ancestry: x.ancestry,
      house: x.house,
      hogwartsStudent: x.hogwartsStudent
    })));
}