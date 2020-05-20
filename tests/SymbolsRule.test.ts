import { Lexer } from '../src/classes'
import {
  SpaceRule,
  NumberRule,
  SymbolsRule,
  PlusToken,
  MinusToken,
  AsteriskToken,
  SlashToken,
  LeftParenthesisToken,
  RightParenthesisToken,
} from '../src/impls'

describe('SymbolsRule class test', () => {
  const lexer = new Lexer([
    new SpaceRule(),
    new NumberRule(),
    new SymbolsRule(),
  ])

  test('+ plus symbol', () => {
    const [, , token, ,] = lexer.analyze('10 + 20') // [10, , +, 20]

    expect(token).toBeInstanceOf(PlusToken)
    expect(token.pos.start).toBe(3)
    expect(token.pos.end).toBe(4)
  })

  test('- minus symbol', () => {
    const [, , token, ,] = lexer.analyze('10 - 20') // [10, , -, 20]

    expect(token).toBeInstanceOf(MinusToken)
    expect(token.pos.start).toBe(3)
    expect(token.pos.end).toBe(4)
  })

  test('* asterisk symbol', () => {
    const [, , token, ,] = lexer.analyze('10 * 20') // [10, , *, 20]

    expect(token).toBeInstanceOf(AsteriskToken)
    expect(token.pos.start).toBe(3)
    expect(token.pos.end).toBe(4)
  })

  test('/ asterisk symbol', () => {
    const [, , token, ,] = lexer.analyze('10 / 20') // [10, , /, 20]

    expect(token).toBeInstanceOf(SlashToken)
    expect(token.pos.start).toBe(3)
    expect(token.pos.end).toBe(4)
  })

  test('( left parenthesis symbol', () => {
    const [token] = lexer.analyze('(')

    expect(token).toBeInstanceOf(LeftParenthesisToken)
    expect(token.pos.start).toBe(0)
    expect(token.pos.end).toBe(1)
  })

  test(') right parenthesis symbol', () => {
    const [token] = lexer.analyze(')')

    expect(token).toBeInstanceOf(RightParenthesisToken)
    expect(token.pos.start).toBe(0)
    expect(token.pos.end).toBe(1)
  })
})
