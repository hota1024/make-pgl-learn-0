import { Lexer } from '../src/classes'
import { StringRule, SpaceRule, StringToken } from '../src/impls'

describe('StringRule class test', () => {
  const lexer = new Lexer([new StringRule(), new SpaceRule()])

  test('double quote', () => {
    const [token] = lexer.analyze('"test"')

    expect(token).toBeInstanceOf(StringToken)
    expect((token as StringToken).value).toBe('test')
    expect(token.pos.start).toBe(0)
    expect(token.pos.end).toBe(5)
  })

  test('single qoute', () => {
    const [token] = lexer.analyze(`'test'`)

    expect(token).toBeInstanceOf(StringToken)
    expect((token as StringToken).value).toBe('test')
    expect(token.pos.start).toBe(0)
    expect(token.pos.end).toBe(5)
  })

  test('quote in string', () => {
    const [token] = lexer.analyze(`'The program says "Hello world"'`)

    expect((token as StringToken).value).toBe(`The program says "Hello world"`)
  })

  test('escape', () => {
    const [token] = lexer.analyze(`'The program says \\'Hello world\\''`)

    expect((token as StringToken).value).toBe(`The program says 'Hello world'`)
  })

  test('unterminated literal', () => {
    expect(() => lexer.analyze(`'test`)).toThrow()
    expect(() => lexer.analyze(`"test`)).toThrow()
    expect(() => lexer.analyze(`test'`)).toThrow()
    expect(() => lexer.analyze(`test"`)).toThrow()
    expect(() => lexer.analyze(`'test\\'`)).toThrow()
  })
})
