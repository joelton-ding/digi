import React from "react"
import Constant from "./Constant"
import Fade from "react-reveal/Fade"

import styles from "./style.module.scss"

const SubBanner = props => {
  let textLabel = props.tag ? Constant.BANNER_MAP[props["tag"]].label : null

  return (
    <div
      className={`${styles.sub_banner} ${styles.about}`}
      style={{
        backgroundImage: `url(${props.image})`,
        minHeight: props.isLarge ? "684px" : "240px",
        backgroundColor: props.color ? props.color : undefined,
      }}
    >
      <Fade bottom>
        <h1 className="banner-text">{textLabel}</h1>
      </Fade>
    </div>
  )
}

export default SubBanner
