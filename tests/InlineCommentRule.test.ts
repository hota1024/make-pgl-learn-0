import { Lexer } from '../src/classes'
import {
  SpaceRule,
  InlineCommentRule,
  NewLineRule,
  InlineCommentToken,
  AlphabetRule,
} from '../src/impls'

describe('InlineCommentRule class test', () => {
  const lexer = new Lexer([
    new SpaceRule(),
    new AlphabetRule(),
    new NewLineRule(),
    new InlineCommentRule(),
  ])

  test('inline comment', () => {
    const [c0, , c1] = lexer.analyze('// hello\n# world')

    expect(c0).toBeInstanceOf(InlineCommentToken)
    expect((c0 as InlineCommentToken).content).toBe(' hello')
    expect((c0 as InlineCommentToken).prefix).toBe('//')
    expect(c0.pos.start).toBe(0)
    expect(c0.pos.end).toBe(7)

    expect(c1).toBeInstanceOf(InlineCommentToken)
    expect((c1 as InlineCommentToken).content).toBe(' world')
    expect((c1 as InlineCommentToken).prefix).toBe('#')
    expect(c1.pos.start).toBe(9)
    expect(c1.pos.end).toBe(15)
  })

  test('inline comment after alphabet', () => {
    const [, , comment] = lexer.analyze('alphabet // comment') // [alpahbet, space, comment]

    expect(comment).toBeInstanceOf(InlineCommentToken)
    expect((comment as InlineCommentToken).content).toBe(' comment')
  })
})
