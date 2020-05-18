import { TokenInterface } from '../interfaces'
import { Pos } from '../classes'

/*
 * Token class.
 */
export class Token<T = undefined> implements TokenInterface<T> {
  /**
   * Token value.
   */
  readonly value: T

  /**
   * Token position.
   */
  readonly pos: Pos

  /**
   * Token constructor.
   *
   * @param pos Token position.
   */
  constructor(pos: Pos)

  /**
   * Token constructor.
   *
   * @param value Token value.
   * @param pos Token position.
   */
  constructor(value: T, pos: Pos)

  /**
   * Token constructor.
   *
   * @param args Args.
   */
  constructor(...args: unknown[]) {
    if (args[0] instanceof Pos) {
      this.pos = args[0]
    } else if (args[1] instanceof Pos) {
      this.value = args[0] as T
      this.pos = args[1]
    } else {
      throw new Error(`Invalid arguments.`)
    }
  }
}
