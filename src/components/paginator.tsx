import React from "react"
import { Link } from "gatsby"

const Paginator = ({ pageCount, currentPage, url }) => {
  let startNum: number = 1
  let endNum: number = pageCount
  let indicators = []
  if (pageCount > 7) {
    startNum = currentPage - 3
    endNum = currentPage + 3
    if (startNum < 1) {
      endNum += 1 - startNum
      startNum = 1
    }
    if (endNum > pageCount) {
      startNum -= endNum - pageCount
      endNum = pageCount
    }
  }
  for (let i: number = startNum; i <= endNum; i++) {
    let indicate: React.ReactNode
    if (currentPage == i) {
      indicate = (
        <span className="page-number current" key={i}>
          {i}
        </span>
      )
    } else {
      indicate = (
        <Link className="page-number" to={`${url}/${i == 1 ? "" : i}`} key={i}>
          {i}
        </Link>
      )
    }
    indicators.push(indicate)
  }

  return <nav className="pagination">{indicators}</nav>
}

export default Paginator
