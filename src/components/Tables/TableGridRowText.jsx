import React from 'react'
import propTypes from 'prop-types'
import styles from 'components/Tables/TableGridRowText.module.css'

export function TableGridRowText ({ children }) {
  return (
    <p className={styles.text}>{children}</p>
  )
}

TableGridRowText.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
}

TableGridRowText.defaultProps = {
  children: ''
}
