import React from 'react'
import Pagination from './Pagination'
import renderer from 'react-test-renderer'

describe('It', () => {

  test('should render Pagination component correctly', () => {
    const component = renderer.create(
      <Pagination
        current={1}
        max={1}
        makeLink={pageNum => `/articles/page/${pageNum}/`}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Pagination component with both next page link and previous page link correctly', () => {
    const component = renderer.create(
      <Pagination
        current={2}
        max={3}
        makeLink={pageNum => `/articles/page/${pageNum}/`}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Pagination component with previous page link correctly', () => {
    const component = renderer.create(
      <Pagination
        current={3}
        max={3}
        makeLink={pageNum => `/articles/page/${pageNum}/`}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})


