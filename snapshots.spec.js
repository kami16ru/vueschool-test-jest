const user = {
    name: 'Tony Hawk',
    age: 42,
    job: 'inventor'
}

test('user matches', () => {
    const userString = "{\"name\":\"Tony Hawk\",\"age\":42,\"job\":\"inventor\"}"

    // expect(JSON.stringify(user)).toBe(userString)
    expect(user).toMatchSnapshot()
})
