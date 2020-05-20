import {
  AlphabetRule,
  InlineCommentRule,
  NewLineRule,
  NumberRule,
  RangeCommentRule,
  SpaceRule,
  StringRule,
  SymbolsRule,
} from '..'

export * from './AlphabetRule'
export * from './InlineCommentRule'
export * from './NewLineRule'
export * from './NumberRule'
export * from './RangeCommentRule'
export * from './SpaceRule'
export * from './StringRule'
export * from './SymbolsRule'

export const AllRules = [
  new AlphabetRule(),
  new InlineCommentRule(),
  new NewLineRule(),
  new NumberRule(),
  new RangeCommentRule(),
  new SpaceRule(),
  new StringRule(),
  new SymbolsRule(),
]
