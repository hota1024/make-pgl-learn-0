export * from './AlphabetRule'
export * from './InlineCommentRule'
export * from './NewLineRule'
export * from './NumberRule'
export * from './RangeCommentRule'
export * from './SpaceRule'
export * from './StringRule'
export * from './SymbolsRule'

import { AlphabetRule } from './AlphabetRule'
import { InlineCommentRule } from './InlineCommentRule'
import { NewLineRule } from './NewLineRule'
import { NumberRule } from './NumberRule'
import { RangeCommentRule } from './RangeCommentRule'
import { SpaceRule } from './SpaceRule'
import { StringRule } from './StringRule'
import { SymbolsRule } from './SymbolsRule'

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
