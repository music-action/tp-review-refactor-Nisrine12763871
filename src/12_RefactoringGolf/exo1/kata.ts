/* eslint-disable */

// read the code
export class Game {
  private _lastSymbol = " ";
  private _toto: Board = new Board();

  public Play(symbol: string, x: number, y: number): void {
    this.validateFirstMove(symbol);

    if (this._lastSymbol != " ") {
      this.validatePlayer(symbol);
      this.validatePositionIsEmpty(x, y);
    }

    this.updateLastPlayer(symbol);
    this.updateBoard(symbol, x, y);
  }

  private validateFirstMove(player: string) {
    if (this._lastSymbol == " ") {
      if (player == "O") {
        throw new Error("Invalid first player");
      }
    }
  }

  private validatePlayer(player: string) {
    if (player == this._lastSymbol) {
      throw new Error("Invalid next player");
    }
  }

  private validatePositionIsEmpty(x: number, y: number) {
    if (this._toto.TileAt(x, y).Symbol != " ") {
      throw new Error("Invalid position");
    }
  }

  private updateLastPlayer(player: string) {
    this._lastSymbol = player;
  }

  private updateBoard(player: string, x: number, y: number) {
    this._toto.AddTileAt(player, x, y);
  }



  public Winner(): string {
    //if the positions in first row are taken
    if (
      this._toto.TileAt(0, 0)!.Symbol != " " &&
      this._toto.TileAt(0, 1)!.Symbol != " " &&
      this._toto.TileAt(0, 2)!.Symbol != " "
    ) {
      //if first row is full with same symbol
      if (
        this._toto.TileAt(0, 0)!.Symbol == this._toto.TileAt(0, 1)!.Symbol &&
        this._toto.TileAt(0, 2)!.Symbol == this._toto.TileAt(0, 1)!.Symbol
      ) {
        return this._toto.TileAt(0, 0)!.Symbol;
      }
    }

    //if the positions in 2nd row are taken
    if (
      this._toto.TileAt(1, 0)!.Symbol != " " &&
      this._toto.TileAt(1, 1)!.Symbol != " " &&
      this._toto.TileAt(1, 2)!.Symbol != " "
    ) {
      //if middle row is full with same symbol
      if (
        this._toto.TileAt(1, 0)!.Symbol == this._toto.TileAt(1, 1)!.Symbol &&
        this._toto.TileAt(1, 2)!.Symbol == this._toto.TileAt(1, 1)!.Symbol
      ) {
        return this._toto.TileAt(1, 0)!.Symbol;
      }
    }

    //if the positions in 2nd row are taken
    if (
      this._toto.TileAt(2, 0)!.Symbol != " " &&
      this._toto.TileAt(2, 1)!.Symbol != " " &&
      this._toto.TileAt(2, 2)!.Symbol != " "
    ) {
      //if middle row is full with same symbol
      if (
        this._toto.TileAt(2, 0)!.Symbol == this._toto.TileAt(2, 1)!.Symbol &&
        this._toto.TileAt(2, 2)!.Symbol == this._toto.TileAt(2, 1)!.Symbol
      ) {
        return this._toto.TileAt(2, 0)!.Symbol;
      }
    }

    return " ";
  }
}

interface Tile {
  X: number;
  Y: number;
  Symbol: string;
}

class Board {
  private _plays: Tile[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tile: Tile = { X: i, Y: j, Symbol: " " };
        this._plays.push(tile);
      }
    }
  }

  public TileAt(x: number, y: number): Tile {
    return this._plays.find((t: Tile) => t.X == x && t.Y == y)!;
  }

  public AddTileAt(symbol: string, x: number, y: number): void {
    //@ts-ignore
    const tile: Tile = { X: x, Y: y, Symbol: symbol };

    this._plays.find((t: Tile) => t.X == x && t.Y == y)!.Symbol = symbol;
  }
}

// create a PR,
// fix indentation first
//  commit and push
// make your comments,
// then refactor
// submit your PR for review
