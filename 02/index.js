const Axios = require('axios')

Axios.get('https://jsonplaceholder.typicode.com/posts')
	.then(response => {
		let posts = response.data
		// console.log(posts)
		let result = posts.map(async post => {
			let userData = await Axios.get(
				`https://jsonplaceholder.typicode.com/users/${post.userId}`
			)
				.then(response2 => {
					return response2.data
				})
				.catch(err2 => console.log(err2))
			post.user = userData
			console.log(post)
			return post
		})
		// console.log(result)
		return result
	})
	.catch(err => console.log(err))
