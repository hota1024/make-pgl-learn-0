import { Lexer } from '../src/classes'
import { NewLineRule, NewLineToken, AlphabetRule } from '../src/impls'

describe('NewLineRule class test', () => {
  const lexer = new Lexer([new NewLineRule(), new AlphabetRule()])

  test('should return space token', () => {
    const [, nl0, , nl1] = lexer.analyze('hoge\nfuga\n')
    expect(nl0).toBeInstanceOf(NewLineToken)
    expect(nl1).toBeInstanceOf(NewLineToken)
  })
})
