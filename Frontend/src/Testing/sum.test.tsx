const sum = require("./Sum")

test('add x and y', () => {
    expect(
        sum(3, 4))
        .toBe(7)
})

export {};