interface User {
	username: string
	name: string
	projects: string[]
	coolness?: number
}

const users: User[] = [
	{
		username: 'test',
		name: 'Tester',
		projects: ['vitest', 'test']
	}
]

async function loadUser(username: string): Promise<User | undefined> {
	return users.find((user) => user.username === username)
}

export async function loadUserData(username: string) {
	const user = await loadUser(username)

	if (!user) {
		throw new Error(`Could not find '${username}' in test data`)
	}
	user.coolness = username === 'test' ? 100 : -1

	return user
}
