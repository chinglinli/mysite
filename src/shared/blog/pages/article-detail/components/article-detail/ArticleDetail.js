import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import SiteHead from '../../../../components/SiteHead'
import Article from '../../../../components/Article'

import styles from './ArticleDetail.scss'

export default class ArticleDetail extends React.PureComponent {
  static propTypes = {
    siteConfig: ImmutablePropTypes.map,
    summaryMode: PropTypes.bool,
    article: ImmutablePropTypes.contains({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      categories: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })).isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      modifiedDate: PropTypes.instanceOf(Date),
      content: PropTypes.any.isRequired,
      summary: PropTypes.string.isRequired
    }),
    socialConfig: ImmutablePropTypes.map,
    commentConfig: ImmutablePropTypes.map
  }

  render () {
    return (
      <section className={styles.articleDetail}>
        <SiteHead config={this.props.siteConfig}/>
        <Article
          siteConfig={this.props.siteConfig}
          summaryMode={false}
          article={this.props.article}
          socialConfig={this.props.socialConfig}
          commentConfig={this.props.commentConfig}
        />
      </section>
    )
  }
}
