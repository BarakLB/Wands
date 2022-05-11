export interface Wand {
  owner: string;
  wood: string;
  length: string;
  core: string;
  flexibility: string;
}

export interface FilterOptions {
  wood: string[];
  length: string[];
  core: string[];
  flexibility: string[];
}
