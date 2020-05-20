import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext } from '../../types'
import { Pos } from '../../classes'
import { NewLineToken } from '../tokens'

/*
 * NewLine rule class.
 */
export class NewLineRule implements LexerRuleInterface {
  validate({ char }: LexerAnalyzeContext): boolean {
    return char() === '\n'
  }

  execute({ current, forward }: LexerAnalyzeContext): NewLineToken {
    const token = new NewLineToken(new Pos(current(), current() + 1))
    forward()

    return token
  }
}
