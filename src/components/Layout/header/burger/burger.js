import React from 'react'
import { bool, func } from 'prop-types'
import cn from 'classnames'

import styles from './style.module.scss'

const Burger = ({ open, setOpen, ...props }) => {
const isExpanded = open ? true : false;
  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
      className={cn(styles.burger, { [`${styles.open}`]: open })}>
        <span />
        <span />
        <span />
    </button>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger
