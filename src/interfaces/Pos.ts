/*
 * Pos interface.
 */
export interface PosInterface {
  /**
   * Start position.
   */
  readonly start: number

  /**
   * End position.
   */
  readonly end: number

  /**
   * Merge this and other pos and return it.
   */
  merge(other: PosInterface): PosInterface
}
