'use strict'

class PostController {
    async index({view}) {
        const posts = [
            { title: 'Post one', body: 'this is post one' },
            { title: 'Post two', body: 'this is post two' },
            { title: 'Post three', body: 'this is post three' }
        ]

        return view.render('posts.index', {
            title :'Latest Posts',
            posts
        })
    }
}

module.exports = PostController
