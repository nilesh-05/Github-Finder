class Github {
	constructor() {
		this.clientId = 'd58702582e1002ad5878'
		this.clientSecret = '17f28e9bf83b3564d4af6926670dd23b5e7fc2fa'
		this.repos_count = 6
		this.repos_sort = 'created: asc'
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)

		const profile = await profileResponse.json()
		const repos = await repoResponse.json()
		return {
			profile: profile,
			repos: repos
		}
	}
}