import React from 'react'
import styles from './ChangeTheme.module.css'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { Button } from 'components/Buttons/Button'
import { useDispatch } from 'react-redux'
import { changeToLigth, changeToDark } from 'features/ui/uiSlice'

export function ChangeTheme ({ show, onClose }) {
  const dispatch = useDispatch()

  const showChangeTheme = classNames({
    [styles.modal]: true,
    [styles.modalVisible]: show,
    [styles.modalInVisible]: !show
  })

  function handleChangeToLight () {
    dispatch(changeToLigth())
    onClose()
  }
  function handleChangeToDark () {
    dispatch(changeToDark())
    onClose()
  }

  return (
    <div className={showChangeTheme}>
      <div className={styles.content}>
        <p className={styles.captionText}>Выберите тему</p>
        <div className={styles.buttonLight}>
          <Button icon='Sun' textColor='Primary' size='medium' onClick={handleChangeToLight}>Светлая тема</Button>
        </div>
        <div className={styles.buttonDark}>
          <Button icon='Moon' size='medium' textColor='White' color='Blue' onClick={handleChangeToDark}>Темная тема</Button>
        </div>
      </div>
    </div>
  )
}

ChangeTheme.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func
}

ChangeTheme.defaultProps = {
  onClose: () => {}
}
