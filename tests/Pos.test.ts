describe('Pos class test', () => {
  test('should be created correctly', () => {
    const a = new Pos(0, 1)
    expect(a.start).toBe(0)
    expect(a.end).toBe(1)

    const b = new Pos(4, 19)
    expect(b.start).toBe(4)
    expect(b.end).toBe(19)
  })

  test('should be merged', () => {
    const a0 = new Pos(3, 19)
    const a1 = new Pos(1, 5)
    const a2 = a0.merge(a1)
    expect(a2.start).toBe(1)
    expect(a2.end).toBe(19)

    const b0 = new Pos(1, 20)
    const b1 = new Pos(4, 6)
    const b2 = b0.merge(b1)
    expect(b2.start).toBe(1)
    expect(b2.end).toBe(20)
  })
})
