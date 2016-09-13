// Default Blog Config, copy it and rename to "blog.js"

// github ->
//          | user:  Your Github Username (Doesn't have to be same user, use wisely!)
//          | repo:  Your "Blog" Repository Name (Doesn't have to be same repo, use wisely!)
//          | posts: Your folder where posts.md files are stored (Default "blog")
//          | api:   Github API URL (Default "https://api.github.com")
//
// blog ->
//          | title: Your Blog Title
module.exports = {
  github: {
    user: "YourUsername",
    repo: "YourRepoName",
    posts: "blog",
    api: "https://api.github.com"
  },
  blog: {
    title: "The Blog"
  }
}
