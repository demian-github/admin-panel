import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  orderCheckBoxChecked,
  orderCheckBoxUnChecked,
  setCountPage,
  setCurrentPage
} from 'features/data/dataSlice'

import { TableGridColumn } from 'components/Tables/TableGridColumn'
import { TableGridRowText } from 'components/Tables/TableGridRowText'
import { TableGridRowCheckBox } from 'components/Tables/TableGridRowCheckBox'
import { TableGridRowState } from 'components/Tables/TableGridRowState'
import { TableGridRowCurrency } from 'components/Tables/TableGridRowCurrency'
import { TableGridRowItem } from 'components/Tables/TableGridRowItem'

import styles from 'components/Tables/TableGrid.module.css'

export function TableGrid ({ orders }) {
  const dispatch = useDispatch()
  const selectedOrders = useSelector((state) => state.data.selectedOrders)
  const [clientHeight, setClientHeight] = useState(0)
  const [scrollableGrid, setScrollableGrid] = useState(null)
  const currentPage = useSelector((state) => state.data.currentPage)
  const [pageNumber, setPageNumber] = useState(1)

  function handleChangeCheckBox ({ target: { checked, name } }) {
    if (checked) {
      dispatch(orderCheckBoxChecked(name))
    } else {
      dispatch(orderCheckBoxUnChecked(name))
    }
  }

  function callbackRef (input) {
    if (input) {
      const countPage = input.clientHeight === 0 ? 1 : Math.floor(input.scrollHeight / input.clientHeight)
      dispatch(
        setCountPage(countPage)
      )
      setClientHeight(input.clientHeight)
      setScrollableGrid(input)
    }
  }

  useEffect(() => {
    if (scrollableGrid) {
      scrollableGrid.scrollTop = (currentPage - 1) * clientHeight
      setPageNumber(currentPage)
    }
  }, [scrollableGrid, pageNumber, currentPage, clientHeight])

  function handleScroll (e) {
    const element = e.target
    if ((currentPage - 1) * clientHeight > element.scrollTop) {
      setPageNumber(currentPage - 1)
      dispatch(setCurrentPage(currentPage - 1))
    }
    if ((currentPage - 1) * clientHeight + clientHeight < element.scrollTop) {
      setPageNumber(currentPage + 1)
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  return (
    <div ref={callbackRef} className={styles.tableGrid} onScroll={handleScroll}>
      {
        orders.map((order) => (
          <TableGridRowItem key={order.id} onDoubleClick={null}>
            <TableGridColumn size='small'>
              <TableGridRowCheckBox
                checked={selectedOrders.indexOf(order.id) !== -1}
                name={order.id}
                onChange={handleChangeCheckBox}
              />
            </TableGridColumn>
            <TableGridColumn size='medium'>
              <TableGridRowText>{order.number}</TableGridRowText>
            </TableGridColumn>
            <TableGridColumn size='large'>
              <TableGridRowText>{order.date}</TableGridRowText>
            </TableGridColumn>
            <TableGridColumn size='large'>
              <TableGridRowState value={order.status} />
            </TableGridColumn>
            <TableGridColumn size='medium'>
              <TableGridRowText>{order.positions}</TableGridRowText>
            </TableGridColumn>
            <TableGridColumn size='large'>
              <TableGridRowCurrency>{order.summa}</TableGridRowCurrency>
            </TableGridColumn>
            <TableGridColumn size='auto'>
              <TableGridRowText>{order.fio}</TableGridRowText>
            </TableGridColumn>
          </TableGridRowItem>
        ))
      }
    </div>

  )
}

TableGrid.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
}

TableGrid.defaultProps = {
  orders: []
}
