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
 const first = this.winnerInRow(0);
  if (first != " ") return first;

  const second = this.winnerInRow(1);
  if (second != " ") return second;

  const third = this.winnerInRow(2);
  if (third != " ") return third;

  return " ";
}

private winnerInRow(row: number): string {
  if (this.isRowFull(row) && this.isRowFullWithSameSymbol(row)) {
    return this._toto.TileAt(row, 0)!.Symbol;
  }
  return " ";
}

private isRowFull(row: number) {
  return (
    this._toto.TileAt(row, 0)!.Symbol != " " &&
    this._toto.TileAt(row, 1)!.Symbol != " " &&
    this._toto.TileAt(row, 2)!.Symbol != " "
  );
}

private isRowFullWithSameSymbol(row: number) {
  return (
    this._toto.TileAt(row, 0)!.Symbol == this._toto.TileAt(row, 1)!.Symbol &&
    this._toto.TileAt(row, 2)!.Symbol == this._toto.TileAt(row, 1)!.Symbol
  );
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
