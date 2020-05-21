import { LexerInterface } from '../interfaces'
import { Token } from '..'

/**
 * Returns current char with offset.
 *
 * @param offset Offset.
 */
export type LexerCharFunction = (offset?: number) => string | undefined

/**
 * Forward current char and returns it.
 *
 * @param steps Steps forward(Default is `1`).
 */
export type LexerForwardFunction = (steps?: number) => string | undefined

/*
 * Returns current position in the source string.
 */
export type LexerCurrentFunction = () => number

/**
 * Returns whether current string matches pattern.
 *
 * @param pattern Pattern string.
 */
export type LexerMatchFunction = (pattern: string) => boolean

/*
 * LexerAnalyzeContext type.
 */
export type LexerAnalyzeContext = {
  /**
   * The lexer.
   */
  lexer: LexerInterface

  /**
   * Source string.
   */
  source: string

  /**
   * Tokens.
   */
  tokens?: Token[]

  char: LexerCharFunction

  forward: LexerForwardFunction

  current: LexerCurrentFunction

  match: LexerMatchFunction
}
