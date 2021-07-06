import React from 'react'
import styles from 'components/Filter/MainFilter.module.css'
import { SearchPanel } from 'components/Filter/SearchPanel'
import { Button } from 'components/Buttons/Button'

export function MainFilter () {
  return (
    <div className={styles.mainFilters}>
      <SearchPanel />
      <Button color='transparent' textColor='Primary' icon='Refresh' onClick={() => null}>
        Загрузка
      </Button>
    </div>
  )
}
