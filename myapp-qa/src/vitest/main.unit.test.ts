import {describe, test, expect} from 'vitest'
import {loadUserData} from "@seed/user";

describe('loadUserData', () => {
    test('loads user seed', async () => {
        const user = await loadUserData('test')
        expect(user).toEqual({
            username: 'test',
            name: 'Tester',
            projects: ['vitest', 'test'],
            coolness: 100
        })
    })
})
