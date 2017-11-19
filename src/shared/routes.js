import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import AppLayoutContainer from './blog/containers/AppLayoutContainer'
import ArticleListContainer from './blog/containers/ArticleListContainer'
import CategorizedArticleListContainer from './blog/containers/CategorizedArticleListContainer'
import ArticleDetailContainer from './blog/containers/ArticleDetailContainer'
import ArchivesContainer from './blog/containers/ArchivesContainer'
import SiteInfoContainer from './blog/containers/SiteInfoContainer'
import PageContainer from './blog/containers/PageContainer'
import LabContainer from './blog/containers/LabContainer'


export const createRoutes = (history) => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={AppLayoutContainer}>
      <IndexRoute component={ArticleListContainer}/>
      <Route path='/lab/' component={LabContainer}/>
      <Route path='/info/' component={SiteInfoContainer}/>
      <Route path='/articles/page/:pageNum/' component={ArticleListContainer}/>
      <Route path='/articles/category/:category/' component={CategorizedArticleListContainer}/>
      <Route path='/articles/category/:category/page/:pageNum/' component={CategorizedArticleListContainer}/>
      <Route path='/articles/archives/' component={ArchivesContainer}/>
      <Route path='/articles/:slug/' component={ArticleDetailContainer}/>
      <Route path='/:app/:slug/' component={PageContainer}/>
    </Route>
  </Router>
)
