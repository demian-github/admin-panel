import styles from 'components/Filter/Filter.module.css'
import React from 'react'
import { MainFilter } from 'components/Filter/MainFilter'
import { ExtendedFilter } from 'components/Filter/ExtendedFilter'
import { useSelector } from 'react-redux'

export function Filter () {
  const visibleFilter = useSelector((state) => state.ui.filterVisile)
  return (
    <div className={styles.filter}>
      <MainFilter />
      <ExtendedFilter visible={visibleFilter} />
    </div>
  )
}
