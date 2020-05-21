import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext } from '../../types'
import { SpaceToken } from '../tokens/SpaceToken'
import { Pos } from '../../classes'

/*
 * Space rule class.
 */
export class SpaceRule implements LexerRuleInterface {
  validate({ char }: LexerAnalyzeContext): boolean {
    return char() === ' '
  }

  execute({ current, forward }: LexerAnalyzeContext): SpaceToken {
    const token = new SpaceToken(new Pos(current(), current()))
    forward()

    return token
  }
}
