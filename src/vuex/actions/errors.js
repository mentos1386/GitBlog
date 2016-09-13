import {
  ERROR_API
} from '../mutation-types'

export default ({ dispatch }, error) => {
  dispatch(ERROR_API, error)
}
