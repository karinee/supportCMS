import React, { Component, createRef } from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from "react-instantsearch-dom"
import { Algolia } from "styled-icons/fa-brands/Algolia"
import MyHits from "./PostHit"

import { Root, HitsWrapper, By } from "./styles"
import Input from "./input"
let result = []
const events = ["mousedown", "touchstart"]
const Results = connectStateResults(
  ({ searchState: state, searchResults: res }) => {
    console.log('res:', res)
    return res && res.nbHits ? <MyHits hits={res.hits}/> : `No result for ${state.query}`
  }
)
const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default class Search extends Component {
  state = { 
    query: ``, 
    focussed: false, 
    ref: createRef()
  }
  searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_KEY
  )
  updateState = state => this.setState(state)

  focus = () => {
    this.setState({ focussed: true })
  }
  disableHits = () => {
    this.setState({ focussed: false })
  }
  handleClickOutside = event => {
    if (!this.state.ref.current.contains(event.target)) {
      this.setState({ focussed: false })
    }
  }

  componentDidMount() {
    events.forEach(event => 
      document.addEventListener(event, this.handleClickOutside)
    )   
  }
  componentWillUnmount() {
    events.forEach(event => 
      document.removeEventListener(event, this.handleClickOutside)
    )   
  }

  render() {
    const { query, focussed, ref } = this.state
    const { indices, collapse, hitsAsGrid } = this.props
    return (
      <InstantSearch
        searchClient={this.searchClient}
        indexName={indices[0].name}
        onSearchStateChange={this.updateState}
        root={{ Root, props: { ref } }}
      >
        <Input onFocus={this.focus} {...{collapse, focussed}} />
        <HitsWrapper
            show={query.length > 0 && focussed}
            hitsAsGrid={hitsAsGrid}
          >
          {indices.map(({ name, title, hitComp }) => (
            <Index
              key={name}
              indexName={name}
            >
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
            </Index>
          ))}
          <Results/>          
          <By>
            Powered by{""}
            <a href="http://www.algolia.com">
              <Algolia size="1em" /> Algolia
            </a>
          </By>
        </HitsWrapper>
      </InstantSearch>
    )
  }
}

{/* <HitsWrapper
            show={query.length > 0 && focussed}
            hitsAsGrid={hitsAsGrid}
          >
          {indices.map(({ name, title, hitComp }) => (
            <Index
              key={name}
              indexName={name}
            >
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
            </Index>
          ))}
          <Results>
            <Hits hitComponent={Hit} />
          </Results>
          <By>
            Powered by{""}
            <a href="http://www.algolia.com">
              <Algolia size="1em" /> Algolia
            </a>
          </By>
        </HitsWrapper> */}

  //       <ol>
  //   {hits.map(hit => (
  //     <li key={hit.objectID}>
  //       <h3>
  //         <p>{hit.objectID}</p>
  //         <p>{hit}</p>
  //       </h3>
  //     </li>
  //   ))}
  // </ol>