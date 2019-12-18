import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NewsBlock = ({ data, isHuge, imgUrl }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={data ? `/news/details?id=${data.id}` : "/"}
    >
      <BlockContainer isHuge={isHuge}>
        <div
          className="dgb-news-image-block"
          style={{
            background: `url(${imgUrl}) no-repeat`,
            backgroundSize: "100%",
          }}
        />
        <div className="dgb-news-title"> {data ? data.subTitle : null} </div>
        <div className="dgb-news-date"> {data ? data.date : null} </div>
      </BlockContainer>
    </Link>
  )
}

export default NewsBlock

const STYLE_VAR = {
  margin: {
    large: "20px",
    small: "10px",
  },
  image: {
    large: "537px",
    small: "220px",
  },
  titleFont: {
    large: "34px",
    small: "20px",
  },
  dateFont: {
    large: "24px",
    small: "14px",
  },
}

const BlockContainer = styled.div`
  margin-bottom: 20px;
  .dgb-news-image-block {
    width: 100%;
    height: ${props =>
      props.isHuge ? STYLE_VAR.image.large : STYLE_VAR.image.small};
  }

  .dgb-news-title {
    color: #0e4f79;
    line-height: 42px;
    font-size: ${props =>
      props.isHuge ? STYLE_VAR.titleFont.large : STYLE_VAR.titleFont.small};
    margin-top: ${props =>
      props.isHuge ? STYLE_VAR.margin.large : STYLE_VAR.margin.small};
  }

  .dgb-news-date {
    color: #3f87c8;
    font-size: ${props =>
      props.isHuge ? STYLE_VAR.dateFont.large : STYLE_VAR.dateFont.small};
    margin-top: ${props =>
      props.isHuge ? STYLE_VAR.margin.large : STYLE_VAR.margin.small};
  }
`
