import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  orderCheckBoxCheckedAll,
  orderCheckBoxUnCheckedAll,
  sortChange
} from 'features/data/dataSlice'
import { TableHeaderRow } from 'components/Tables/TableHeaderRow'
import { TableHeaderColumn } from 'components/Tables/TableHeaderColumn'
import { TableHeaderColumnWithCheckBox } from 'components/Tables/TableHeaderColumnWithCheckBox'

export function TableHeader () {
  const dispatch = useDispatch()
  const headerGridSort = useSelector((state) => state.data.headerGridSort)

  function handleCheckBoxChange ({ target: { checked } }) {
    if (checked) {
      dispatch(orderCheckBoxCheckedAll())
    } else {
      dispatch(orderCheckBoxUnCheckedAll())
    }
  }

  return (
    <TableHeaderRow size='large'>
      <TableHeaderColumnWithCheckBox onChange={handleCheckBoxChange} />
      <TableHeaderColumn size='medium' onClick={() => dispatch(sortChange('number'))} sorting={headerGridSort.find((header) => header.field === 'number').sort}>#</TableHeaderColumn>
      <TableHeaderColumn size='large' onClick={() => dispatch(sortChange('date'))} sorting={headerGridSort.find((header) => header.field === 'date').sort}>Дата</TableHeaderColumn>
      <TableHeaderColumn size='large' onClick={() => dispatch(sortChange('status'))} sorting={headerGridSort.find((header) => header.field === 'status').sort}>Статус</TableHeaderColumn>
      <TableHeaderColumn size='medium' onClick={() => dispatch(sortChange('positions'))} sorting={headerGridSort.find((header) => header.field === 'positions').sort}>Позиций</TableHeaderColumn>
      <TableHeaderColumn size='large' onClick={() => dispatch(sortChange('summa'))} sorting={headerGridSort.find((header) => header.field === 'summa').sort}>Cумма</TableHeaderColumn>
      <TableHeaderColumn size='auto' onClick={() => dispatch(sortChange('fio'))} sorting={headerGridSort.find((header) => header.field === 'fio').sort}>ФИО покупателя</TableHeaderColumn>
    </TableHeaderRow>
  )
}
