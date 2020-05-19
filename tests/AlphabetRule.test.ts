import { Lexer } from '../src/classes'
import { AlphabetRule, PrintToken, SpaceRule } from '../src/impls'
import { IdentifierToken } from '../src/abstracts'

describe('AlphabetRule class test', () => {
  const lexer = new Lexer([new AlphabetRule(), new SpaceRule()])

  test('should return reserved token', () => {
    const [token0, , token1] = lexer.analyze('print print')
    expect(token0).toBeInstanceOf(PrintToken)
    expect(token1).toBeInstanceOf(PrintToken)
  })

  test('should return identifier token', () => {
    const [token0, , token1] = lexer.analyze('hoge fuga')
    expect(token0).toBeInstanceOf(IdentifierToken)
    expect(token1).toBeInstanceOf(IdentifierToken)
  })

  test('position', () => {
    const [token0, , token1, , token2] = lexer.analyze('hoge fuga print')

    expect(token0.pos.start).toBe(0)
    expect(token0.pos.end).toBe(3)

    expect(token1.pos.start).toBe(5)
    expect(token1.pos.end).toBe(8)

    expect(token2.pos.start).toBe(10)
    expect(token2.pos.end).toBe(14)
  })
})
