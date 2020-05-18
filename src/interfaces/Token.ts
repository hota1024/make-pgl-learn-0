import { Pos } from '../classes'

/*
 * Token interface.
 */
export interface TokenInterface<T = undefined> {
  /**
   * Token value.
   */
  readonly value: T

  /**
   * Token position.
   */
  readonly pos: Pos
}
