import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { Header } from 'components/Header/Header'
import { Filter } from 'components/Filter/Filter'
import { Tables } from 'components/Tables/Tables'
import styles from 'components/MainPage/MainPage.module.css'

export function MainPage () {
  const theme = useSelector((state) => state.ui.theme)
  const themeStyle = styles[`${theme}Theme`]

  const styleMainPage = classNames(
    {
      [styles.mainPage]: true,
      [themeStyle]: true
    }
  )

  useEffect(() => {
    document.body.classList = []
    document.body.classList.add(themeStyle)
    document.body.classList.add(styles.bodyMain)
  }, [themeStyle])

  return (
    <div className={styleMainPage}>
      <Header />
      <Filter />
      <Tables />
    </div>
  )
}
