import { Lexer } from '../src/classes'
import { SpaceRule, SpaceToken, AlphabetRule } from '../src/impls'

describe('AlphabetRule class test', () => {
  const lexer = new Lexer([new SpaceRule(), new AlphabetRule()])

  test('should return space token', () => {
    const [, space0, , space1] = lexer.analyze('hoge fuga ')
    expect(space0).toBeInstanceOf(SpaceToken)
    expect(space1).toBeInstanceOf(SpaceToken)
  })
})
