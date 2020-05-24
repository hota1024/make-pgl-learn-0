import { ASTNode } from '../..'

/*
 * OperatorKind type
 */
export type OperatorKind = 'plus' | 'minus'

/*
 * UnaryOperatorNode class.
 */
export class UnaryOperatorNode extends ASTNode {
  /**
   * Operator kind.
   */
  readonly kind: OperatorKind

  /**
   * Node.
   */
  readonly node: ASTNode
}
