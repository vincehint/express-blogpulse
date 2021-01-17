const db = require('./models')

// db.comment.create({
//     name: 'Bob Jones',
//     content: 'This is a wonderful article by a great author.',
//     articleID: 1
// }).then(comment => {
//     console.log(comment)
//     process.exit()
// })

// db.article.findOne({
//     where: {id: 1},
//     include: [db.comment]
// }).then(article => {
//     console.log(article.comments)
//     process.exit()
// })