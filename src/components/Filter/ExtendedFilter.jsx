import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'
import { InputsWithLabel } from 'components/Inputs/InputsWithLabel'
import { Input } from 'components/Inputs/Input'
import { Button } from 'components/Buttons/Button'
import { filterExtended } from 'features/data/dataSlice'
import { CheckBoxMultiSelect } from 'components/CheckBox/CheckBoxMultiSelect'
import styles from 'components/Filter/ExtendedFilter.module.css'

export function ExtendedFilter ({ visible }) {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    dateOrderFrom: '',
    dateOrderTo: '',
    statusFilter: [],
    priceFrom: '',
    priceTo: ''
  })

  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)

  const visiblePanelStyleName = classNames({
    [styles.panel]: true,
    [styles.panelInVisible]: !visible
  })

  function handleClickApplyFilter () {
    console.log({ ...form })
    dispatch(filterExtended({ ...form }))
  }

  function handleChangeInput ({ target: { value, name } }) {
    setForm({ ...form, [name]: value })
  }

  function handleResetInput (name) {
    console.log(name)
    setForm({ ...form, [name]: '' })
  }

  function handleChangeStatus () {
    setForm({ ...form, statusFilter: [] })
  }

  return (
    <div className={visiblePanelStyleName}>
      <div className={styles.content}>
        <div className={styles.inputDateFrom}>
          <InputsWithLabel
            type='date'
            name='dateOrderFrom'
            placeholder='dd.mm.dddd'
            labeltext='с'
            caption='Дата оформления'
            onChange={handleChangeInput}
            onReset={handleResetInput}
          />
        </div>
        <div className={styles.inputDateTo}>
          <Input type='date' name='dateOrderTo' placeholder='dd.mm.dddd' labeltext='по' onChange={handleChangeInput} onReset={handleResetInput} />
        </div>
        <div className={styles.inputStatus}>
          <CheckBoxMultiSelect
            items={stateOfOrders}
            defaultValue='Любой'
            placeholder='dd.mm.dddd'
            caption='Статус заказа'
            onChange={handleChangeStatus}
          />
        </div>
        <div className={styles.inputSummaFrom}>
          <InputsWithLabel
            type='number'
            name='priceFrom'
            placeholder='Р'
            labeltext='от'
            caption='Сумма заказа'
            onChange={handleChangeInput}
            onReset={handleResetInput}
          />
        </div>
        <div className={styles.inputSummaTo}>
          <Input type='number' name='priceTo' placeholder='Р' labeltext='до' onChange={handleChangeInput} onReset={handleResetInput} />
        </div>
        <div className={styles.buttonApplay}>
          <Button textColor='Primary' onClick={handleClickApplyFilter}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  )
}

ExtendedFilter.propTypes = {
  visible: propTypes.bool
}

ExtendedFilter.defaultProps = {
  visible: false
}
