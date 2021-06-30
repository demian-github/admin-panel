import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'components/Buttons/Button'
import { Pagination } from 'components/Tables/Pagination'
import { TableFooterRow } from 'components/Tables/TableFooterRow'
import styles from 'components/Tables/TableFooter.module.css'

export function TableFooter () {
  const currentPage = useSelector((state) => state.data.currentPage)
  const allPages = useSelector((state) => state.data.allPages)
  const selectedRow = useSelector((state) => state.data.selectedOrdersCount)

  return (
    <TableFooterRow size='large'>
      <div className={styles.tableFooter}>
        <div className={styles.buttonPanel}>
          <p className={styles.textSelect}>{`Выбрано записей: ${selectedRow}`}</p>
          <div className={styles.buttonUpdate}>
            <Button icon='Pencil' color='Blue' size='medium' onClick={null}>
              Изменить статус
            </Button>
          </div>
          <div className={styles.buttonDelete}>
            <Button
              icon='Delete'
              type='solid'
              size='medium'
              onClick={null}
              color='Red'
            >
              Удалить
            </Button>
          </div>
        </div>
        <div className={styles.pagesPanel}>
          <div className={styles.pages}>
            <Pagination currentPage={currentPage} allPages={allPages} />
          </div>
        </div>
      </div>
    </TableFooterRow>
  )
}
