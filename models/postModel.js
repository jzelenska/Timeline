const posts = [
  {
    name: "Michael Choi",
    createdAt: "23-01-2013",
    message: "This is my message. This is my message. This is my message."
  },
  {
    name: "Michael Choi",
    createdAt: "15-01-2013",
    message: "Hello! Here's my first post."
  },
  {
    name: "Cory Whiteland",
    createdAt: "01-01-2013",
    message: "Just testing this out..."
  },
    {
    name: "Cory Whiteland",
    createdAt: "23-01-2013",
    message: "The last one..."
  }
];

function getSortedPosts() {
  return posts
    .map(p => ({
      ...p,
      date: new Date(p.createdAt.split('-').reverse().join('-'))
    }))
    .sort((a, b) => b.date - a.date)
    .map(({ date, ...rest }) => rest); // remove extra date
}

function addPost(post) {
  posts.push(post);
}

module.exports = { getSortedPosts, addPost };