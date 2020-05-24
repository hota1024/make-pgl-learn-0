import { ASTNode } from '../..'

/*
 * BinomialOpertaorKind type.
 */
export type BinomialOperatorKind =
  | 'addition'
  | 'subraction'
  | 'multiplication'
  | 'division'

/*
 * BinomialOperatorNode class.
 */
export class BinomialOperatorNode extends ASTNode {
  /**
   * Left node.
   */
  readonly left: ASTNode

  /**
   * Right node.
   */
  readonly right: ASTNode
}
