export default class Comment {
  constructor(name, date, comment, commentType) {
    this.name = name
    this.date = date
    this.comment = comment
    this.commentType = commentType
  }
}

const displayComments = (comments) => {
  comments.forEach((comment) => {
    if (comment.commentType === "hike") {
      console.log(comment.name)
    }
  })
}

export { Comment, displayComments }
