import {
  UTIL_TITLE
} from '../mutation-types'

export const setTitle = ({ dispatch }, title) => {
  dispatch(UTIL_TITLE, title)
  document.title = title
}
