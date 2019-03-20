import React from "react"
import { Link } from "gatsby"
import SubItem from "./subItem"

const Item = ({categories, name, toLink}) => (
  <li>
    <Link to={toLink} activeStyle={{color: "red"}}>
      {name}
    </Link>
    {categories ?
    <ul>
      {categories.map(({title, tertiaryCategory}, index) => (
        <SubItem
          key={index}
          title={title}
          tertiaryCategory={tertiaryCategory}
          toLink={`${toLink}/${title}`}
        />
      ))}
    </ul> : null}
  </li>
)
export default Item