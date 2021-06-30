import React, { useState } from 'react'
import { Button } from 'components/Buttons/Button'
import { ChangeTheme } from './ChangeTheme'
import { useSelector } from 'react-redux'
import styles from 'components/Header/Header.module.css'

export function Header () {
  const [showChangeTheme, setShowChangeTheme] = useState(false)

  const theme = useSelector((state) => state.ui.theme)
  const iconName = theme === 'light' ? 'Sun' : 'Moon'
  const themeName = theme === 'light' ? 'Светлая тема' : 'Темная тема'

  function handleClick () {
    setShowChangeTheme(true)
  }

  function handleClose () {
    setShowChangeTheme(false)
  }

  return (
    <div className={styles.header}>
      <div className={styles.caption}>
        <h1>Список заказов</h1>
      </div>
      <div className={styles.popup}>
        <Button size='Big' icon={iconName} onClick={handleClick} textColor='Primary'>
          {themeName}
        </Button>
        <ChangeTheme show={showChangeTheme} onClose={handleClose} />
      </div>
    </div>
  )
}
