const axios = require('axios')

describe('Users', () => {
    test('Can add a user', () => {
        return axios.post(`http://localhost:3001/users`, {
            name: "Integration Test user",
            avatar: "https://avatarfiles.alphacoders.com/280/thumb-280960.png"
        }).then(res => {
            expect(res.status).toBe(200)
            return axios.get(`http://localhost:3001/`)
        }).then(res => {
            expect(res.status).toBe(200)
            expect(res.data).toEqual(expect.stringMatching(/Integration Test user/))
        })
    })
})