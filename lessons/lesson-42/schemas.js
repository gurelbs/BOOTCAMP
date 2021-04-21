/* 

users
    id,
    name,
    email
posts
    id,
    owner: (users.id)
    title,
    text,
    tag,
    comments {
        id
        text,
        owner: (user.id)
    }

*/