import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Base from '../base'
import ArticleList from '../article-list'
import Article from '../article'
import Archives from '../archives'
import Page from '../page'


const routes = (
  <Route path="/" component={Base}>
    <IndexRoute component={ArticleList}/>
    <Route path='/articles/page/:pageNum/' component={ArticleList}/>
    <Route path='/articles/category/:category/' component={ArticleList}/>
    <Route path='/articles/category/:category/page/:pageNum/' component={ArticleList}/>
    <Route path='/articles/archives/' component={Archives}/>
    <Route path='/articles/:slug/' component={Article}/>
    <Route path='/:app/:slug/' component={Page}/>
  </Route>
)

export default routes
