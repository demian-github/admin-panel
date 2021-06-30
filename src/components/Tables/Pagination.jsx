import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import { Button } from 'components/Buttons/Button'
import { setCurrentPage } from 'features/data/dataSlice'
import { LEFT_PAGE, RIGHT_PAGE, BUTTON_CHANGE, fetchPageNumbers } from 'components/Tables/PaginationConst'
import styles from 'components/Tables/Pagination.module.css'

export function Pagination ({ currentPage: currPage, allPages }) {
  const dispatch = useDispatch()
  const pagesNeighbours = 1

  if (allPages === 1) return null

  const pages = fetchPageNumbers(allPages, currPage, pagesNeighbours)

  return (
    <div className={styles.pagination}>
      {
        pages.map((page) => {
          if (page === LEFT_PAGE) {
            return (
              <div key={nanoid()} className={styles.divPages}>
                ...
              </div>
            )
          }

          if (page === RIGHT_PAGE) {
            return (
              <div key={nanoid()} className={styles.divPages}>
                ...
              </div>
            )
          }

          if (page === BUTTON_CHANGE) {
            return (
              <div ref={null} key={nanoid()} className={styles.divPages}>
                <Button
                  color={page === currPage ? 'Blue' : 'transparent'}
                  textColor={page === currPage ? 'White' : 'Primary'}
                  size='medium'
                  onClick={null}
                >
                  {page.toString()}
                </Button>
              </div>
            )
          }

          return (
            <div key={nanoid()} className={styles.divPages}>
              <Button
                color={page === currPage ? 'Blue' : 'transparent'}
                textColor={page === currPage ? 'White' : 'Primary'}
                size='medium'
                onClick={() => dispatch(setCurrentPage(page))}
              >
                {page.toString()}
              </Button>
            </div>
          )
        })
      }
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  allPages: PropTypes.number
}

Pagination.defaultProps = {
  currentPage: 1,
  allPages: 1
}
