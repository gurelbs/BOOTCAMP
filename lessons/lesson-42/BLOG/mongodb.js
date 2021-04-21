const {MongoClient, ObjectID, ObjectId} = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'

MongoClient.connect(uri, async (err,client) => {
    if (err) {
        return console.log('some error...');
    }
    const DB = client.db('blog')
    try {
        await DB.collection('users').insertMany([
            { name: 'gurel ben shabat', email: 'guri240@gmail.com'},
            { name: 'jeff bezos', email: 'jeff@gmail.com'},
            { name: 'gadi', email: 'gadi@gmail.com'},
            ])

        const post = {
            myId: 1,
            title: 'first title',
            text: 'this is the best data in the world',
            tags: ['#firstpost', '#nice']
        }
        const userPost = await DB.collection('users').findOne({email: 'guri240@gmail.com'})

        await DB.collection('posts').insertOne({
            ...post,
            comments: [],
            owner: userPost._id
        })

        const comment = { text: "this is some comment...." }
        const userComment = await DB.collection('users').findOne({email: 'jeff@gmail.com'})
        console.log(userComment);
        await DB.collection('posts').updateOne(
            {myId: 1},
            { $push: { comments: {
                    ...comment,
                    owner: userComment._id
                }}
            }
        )
    } catch (e) {
        console.log(e)
    }
    client.close()
})
