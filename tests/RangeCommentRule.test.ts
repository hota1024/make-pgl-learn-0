import { Lexer } from '../src/classes'
import {
  SpaceRule,
  AlphabetRule,
  RangeCommentRule,
  RangeCommentToken,
} from '../src/impls'

describe('RangeCommentRule class test', () => {
  const lexer = new Lexer([
    new SpaceRule(),
    new AlphabetRule(),
    new RangeCommentRule(),
  ])

  test('range comment', () => {
    const [token] = lexer.analyze('/* Hello\nworld */')

    expect(token).toBeInstanceOf(RangeCommentToken)
    expect((token as RangeCommentToken).content).toBe(' Hello\nworld ')
  })

  test('undeterminate range comment', () => {
    expect(() => lexer.analyze('/* hello\nworld')).toThrow()
  })
})
