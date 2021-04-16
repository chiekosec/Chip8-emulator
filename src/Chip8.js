import { Display } from "./Display";

export class Chip8 {
  constructor() {
    console.log("created chip8");
    this.display = new Display();
  }
}
