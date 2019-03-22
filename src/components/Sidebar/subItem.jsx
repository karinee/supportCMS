import React from "react"
import { Link } from "gatsby"

const SubItem = ({title, tertiaryCategory, toLink}) => (
  <li>
    <Link 
      to={toLink} 
      activeStyle={{color: "red"}}
      partiallyActive={true}
    >
      {title}
    </Link>
    {tertiaryCategory ?
    <ul>
      {tertiaryCategory.map(({ name }, index) => (
        <li key={index}>
          <Link to={`${toLink}/${name}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul> : null}
  </li>
)
export default SubItem