import { Lexer } from '../src/classes'
import { SpaceRule, NumberRule, NumberToken } from '../src/impls'

describe('NumberRule class test', () => {
  const lexer = new Lexer([new SpaceRule(), new NumberRule()])

  test('should return number token', () => {
    const [num0, , num1, , num2] = lexer.analyze('10 20 1024')
    expect(num0).toBeInstanceOf(NumberToken)
    expect((num0 as NumberToken).value).toBe(10)
    expect(num0.pos.start).toBe(0)
    expect(num0.pos.end).toBe(1)

    expect(num1).toBeInstanceOf(NumberToken)
    expect((num1 as NumberToken).value).toBe(20)
    expect(num1.pos.start).toBe(3)
    expect(num1.pos.end).toBe(4)

    expect(num2).toBeInstanceOf(NumberToken)
    expect((num2 as NumberToken).value).toBe(1024)
    expect(num2.pos.start).toBe(6)
    expect(num2.pos.end).toBe(9)
  })
})
