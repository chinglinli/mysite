import { combineReducers } from 'redux-immutable'

import config from './config'
import article from './article'
import lab from './lab'
import page from './page'
import routing from './routing'
import siteInfo from './site-info'

export default combineReducers({
  config: config.reducer,
  article: article.reducer,
  lab: lab.reducer,
  page: page.reducer,
  routing: routing.reducer,
  siteInfo: siteInfo.reducer
})
