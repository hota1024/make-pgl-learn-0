import { Pos } from '../classes'

/*
 * Token interface.
 */
export interface TokenInterface<T = unknown> {
  /**
   * Token value.
   */
  readonly value?: T

  /**
   * Token position.
   */
  readonly pos: Pos
}
