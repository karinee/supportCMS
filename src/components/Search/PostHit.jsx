// import React from "react"
// // import { connectHits } from "react-instantsearch-dom"

// const postHit = ({hits}) => (
  // <ol>
  //   {hits.map(hit => (
  //     <li key={hit.objectID}>
  //       <h3>
  //         <p>{hit.objectID}</p>
  //         <p>{hit}</p>
  //       </h3>
  //     </li>
  //   ))}
  // </ol>
// )
// // const PostHit = connectHits(postHit)
// export default postHit

// import React from 'react';

// //Import Components
// import {connectHits} from 'react-instantsearch/connectors';
// import Product from './Product'

// const MyHits = (props)  => {
//     const items = props.hits.map(hit => <Product hit={hit} />)
//     return (
//         <div>
//             {items}
//         </div>
//     )
// }


// export default connectHits(MyHits);


import React, { Component } from "react"

const flatten = obj => 
  {
    if (obj) {
      return obj['en-US']
    }
    return obj
  }
export default class MyHits extends Component {
  render() {
    const { hits } = this.props
    console.log('hits: ', hits)
    const result = hits.map(hit => 
      <li key={hit.objectID}>
        <h3>
          <p>{flatten(hit.fields.title)}</p>
        </h3>
      </li>
    )
    return (
      <ol>
        {result}
      </ol>
    )
  }
}