import React, { useState } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { CheckBox } from 'components/CheckBox/CheckBox'
import { Icon } from 'components/Icons/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { checkBoxMultiSelect } from 'features/data/dataSlice'
import styles from './CheckBoxMultiSelect.module.css'

export function CheckBoxMultiSelect ({ items, onChange, defaultValue }) {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const dispatch = useDispatch()
  const selectedValuesLength = useSelector((state) => state.data.selectedValues.length)

  function handleClick () {
    setIsOpenPopup(!isOpenPopup)
  }

  const dropDownStyles = classNames({
    [styles.dropdownchecklist]: true,
    [styles.visible]: isOpenPopup
  })

  function handleChangeCheckBox ({ target: { checked, name } }) {
    dispatch(checkBoxMultiSelect({ checked, name }))
  }

  return (
    <div className={dropDownStyles} onClick={handleClick}>
      <div className={styles.text}>
        <span className={styles.anchor}>{selectedValuesLength ? 'Значение выбрано' : defaultValue}</span>
      </div>
      <div className={styles.button}>
        <Icon icon='Arrow' color='lightBlue' />
      </div>
      <ul className={styles.items}>
        {
          items.map((item) => {
            return (
              <li key={item.key}><CheckBox name={item.key} onChange={handleChangeCheckBox}>{item.value}</CheckBox></li>
            )
          })
        }
      </ul>
    </div>
  )
}

CheckBoxMultiSelect.propTypes = {
  defaultValue: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
      ]),
      value: propTypes.string
    })
  ),
  onChange: propTypes.func
}

CheckBoxMultiSelect.defaultProps = {
  defaultValue: '',
  items: [],
  onChange: () => {}
}
