import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { useOnClickOutside } from "../../Layout/layout/hooks"
import { Burger, Menu } from "../index"
import FocusLock from "react-focus-lock"
import Logo from "../../../images/logo.svg"
import styles from "./style.module.scss"

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu"

  useOnClickOutside(node, () => setOpen(false))

  useEffect(() => {
    let headerScroll = require("header-scroll-up")
    headerScroll.setScrollableHeader("#mainHeader", { topOffset: 100 })
  })

  return (
    <header id="mainHeader" className={`clearfix ${styles.component}`}>
      <div className={`clearfix ${styles.component__main_header}`}>
        <h1 className={styles.component__main_header__logo}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </h1>
        <div className={`clearfix ${styles.menuBurger}`} ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </div>
    </header>
  )
}

export default Header
