export type PlanetName =
  | "Mercury"
  | "Venus"
  | "Earth"
  | "Mars"
  | "Jupiter"
  | "Saturn"
  | "Uranus"
  | "Neptune";

export interface PlanetInfo {
  content: string;
  source: string;
}

export interface PlanetImages {
  planet: string;
  internal: string;
  geology: string;
}

export interface PlanetData {
  name: PlanetName;
  overview: PlanetInfo;
  structure: PlanetInfo;
  geology: PlanetInfo;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: PlanetImages;
}

export const themes: Record<PlanetName, string> = {
  Mercury: "#419EBB",
  Venus: "#EDA348",
  Earth: "#6C2ED4",
  Mars: "#D14C32",
  Jupiter: "#D93A35",
  Saturn: "#CD5021",
  Uranus: "#1EC1A2",
  Neptune: "#2C68F1",
};

export type Tab = "overview" | "structure" | "surface";
