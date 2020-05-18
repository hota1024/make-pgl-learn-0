import { PosInterface } from '../interfaces'

/*
 * Pos class.
 */
export class Pos implements PosInterface {
  /**
   * Start position.
   */
  readonly start: number

  /**
   * End position.
   */
  readonly end: number

  /**
   * Pos constructor.
   *
   * @param start Start position.
   * @param end End position.
   */
  constructor(start: number, end: number) {
    this.start = start
    this.end = end
  }

  /**
   * Merge this and other position and returns it.
   *
   * @param other Other position.
   */
  merge(other: PosInterface): PosInterface {
    return new Pos(
      Math.min(this.start, other.start),
      Math.max(this.end, other.end)
    )
  }
}
