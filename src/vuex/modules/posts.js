import {
  POSTS_LOAD,
  POSTS_GET
} from '../mutation-types'

// Initial state
const state = {
  list: [],
  loaded: []
}

// mutations
const mutations = {
  [POSTS_LOAD] (state, response) {
    response.body.forEach((post) => {
      // Check if file is .md and it doesn't start with character/word before |. As anything with word before | isn't published
      // BUT IT HAS TO START WITH |
      //
      // Acceptable:
      //  |some random title.md
      //  1| some random title.md
      //  123| some random title.md
      //
      // Not Acceptable (not published):
      //  X1| some random title.md
      //  a| some random title.md
      //   | some random title.md (space in the beginning)

      if (/^(\d*\|).*\.(md|MD)$/.test(post.name)) {
        // Title formatting
        // Remove everything before "|" and space after that.
        // "|" is used, if you want to add some info before file name (like numbering etc.)
        post.title = post.name.replace(/^(.*)\|\s/, '')
        // Also remove ".md" from the title
        post.title = post.title.replace(/\.(md|MD)$/, '')

        // Link Formatting
        // Replace all the spaces " " with "-"
        post.link = post.title.replace(/ /g, '-')
        state.list.push(post)
      }
    })
  },
  [POSTS_GET] (state, response) {
    state.loaded.push(response)
  }
}

export default {
  state,
  mutations
}
