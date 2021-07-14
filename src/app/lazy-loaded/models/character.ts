export interface CharacterApi {
  info: CharacterApiInfo;
  results: CharacterApiResult[];
}

export interface CharacterApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterApiResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterApiResultDescription;
  location: CharacterApiResultDescription;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterApiResultDescription {
  name: string;
  url: string;
}
