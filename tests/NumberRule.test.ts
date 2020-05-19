import { Lexer } from '../src/classes'
import { SpaceRule, NumberRule, NumberToken } from '../src/impls'

describe('AlphabetRule class test', () => {
  const lexer = new Lexer([new SpaceRule(), new NumberRule()])

  test('should return space token', () => {
    const [num0, , num1, , num2] = lexer.analyze('10 20 1024')
    expect(num0).toBeInstanceOf(NumberToken)
    expect((num0 as NumberToken).value).toBe(10)

    expect(num1).toBeInstanceOf(NumberToken)
    expect((num1 as NumberToken).value).toBe(20)

    expect(num2).toBeInstanceOf(NumberToken)
    expect((num2 as NumberToken).value).toBe(1024)
  })
})
