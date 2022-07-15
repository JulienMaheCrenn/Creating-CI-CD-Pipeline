describe('server', () => {
    test('PORT is set', () => {
        expect(process.env.PORT).toBe("3001")
    })
    test('ENV is set', () => {
        expect(process.env.NODE_ENV).toBe("test")
    })
})