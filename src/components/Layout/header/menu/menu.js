import React from "react"
import { Link } from "gatsby"
import { bool } from "prop-types"
import { ChevronDown } from "react-feather"
import { SVG } from "./iconSVG"
import cn from "classnames"

import styles from "./style.module.scss"

const Menu = ({ open, setOpen }) => {
  const hideMenu = () => {
    setOpen(false)
  }

  const isHidden = open ? true : false
  return (
    <nav
      open={open}
      aria-hidden={!isHidden}
      className={cn(styles.menu______, { [`${styles.open}`]: open })}
    >
      <div className={styles.component}>
        {/* <input type="checkbox" className="drop" /> */}
        <ul className={styles.menu}>
          <li>
            <Link
              className={`${styles.nav_link} ${styles.nav_link_ltr}`}
              activeClassName={styles.active}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <label htmlFor="drop-1" className={styles.toggle}>
              About <ChevronDown />
            </label>
            <Link
              className={`${styles.nav_link} ${styles.nav_link_ltr}`}
              activeClassName={styles.active}
              to="/about"
            >
              About
            </Link>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/about#whyUs"
                  onClick={hideMenu}
                >
                  Why Us?
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/about#aboutDominica"
                  onClick={hideMenu}
                >
                  About Dominica
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/about#security"
                  onClick={hideMenu}
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/about#regulatoryAuthority"
                  onClick={hideMenu}
                >
                  Regulatory Authority
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/about#FATCA"
                  onClick={hideMenu}
                >
                  FATCA
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/about#aml"
                  onClick={hideMenu}
                >
                  AML
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/news"
                  onClick={hideMenu}
                >
                  News
                </Link>
              </li>
              {/* <li>
                <Link
                  activeClassName={styles.active}
                  to="/about#video"
                  onClick={hideMenu}
                >
                  Video
                </Link>
              </li> */}
            </ul>
          </li>
          <li>
            <label htmlFor="drop-2" className={styles.toggle}>
              Product &amp; Services <ChevronDown />
            </label>
            <Link
              className={`${styles.nav_link} ${styles.nav_link_ltr}`}
              activeClassName={styles.active}
              to="/products-and-services"
            >
              Product &amp; Services
            </Link>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/products-and-services#multicurrencyAccounts"
                  onClick={hideMenu}
                >
                  Multicurrency Accounts
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/products-and-services#bankCards"
                  onClick={hideMenu}
                >
                  Bank Cards
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/products-and-services#forex"
                  onClick={hideMenu}
                >
                  Forex
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/products-and-services#payroll"
                  onClick={hideMenu}
                >
                  Payroll
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/products-and-services#wealthManagement"
                  onClick={hideMenu}
                >
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to="/products-and-services#timeDeposits"
                  onClick={hideMenu}
                >
                  Time Deposits
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className={`${styles.nav_link} ${styles.nav_link_ltr}`}
              activeClassName={styles.active}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className={styles.open_account}>
            <Link activeClassName={styles.active} to="/open-account">
              {SVG.SVGUser}
              Open Account
            </Link>
          </li>
          {/* <li className={styles.login}><Link activeClassName={styles.active} to="/"><ArrowRight size={20}  /> Login</Link></li> */}
        </ul>
      </div>
    </nav>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
