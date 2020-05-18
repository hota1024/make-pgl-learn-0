import { Pos } from '../src/classes'

describe('Token class test', () => {
  test('should be created correctly', () => {
    const token0 = new Token(new Pos(0, 1))
    expect(token0.value).toBeUndefined()
    expect(token0.pos.start).toBe(0)
    expect(token0.pos.end).toBe(1)

    const token1 = new Token('test', new Pos(0, 3))
    expect(token1.value).toBe('test')
    expect(token0.pos.start).toBe(0)
    expect(token0.pos.end).toBe(3)

    const token1 = new Token(10, new Pos(0, 1))
    expect(token1.value).toBe(19)
    expect(token0.pos.start).toBe(0)
    expect(token0.pos.end).toBe(3)
  })
})
