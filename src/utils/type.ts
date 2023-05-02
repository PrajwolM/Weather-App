export interface ITempResp {
  weather: { main: string; description: string; icon: string }[];
  main: { temp: number };
  id: number;
  name: string;
  cod: number;
}

export interface ErrorHandle {
  cod: number;
  message: string;
}
