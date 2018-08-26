import React, { Component } from 'react'

export default class Sidebar extends Component {
  render () {
    const { onChangeWebsite, website } = this.props

    return <aside className={`sidebar`} >
      <div className="side-comp">
        <h3 className="heading">Websites</h3>
        <label>
          <input type="radio" name="website" value="1"
            checked={ website === '1' }
            onChange={(e) => onChangeWebsite(e)} />
          Unsplash
        </label>
        <label>
          <input type="radio" name="website" value="2"
            checked={ website === '2' }
            onChange={(e) => onChangeWebsite(e)} />
          Flickr
        </label>
        <label style={{color:'gray', fontSize: '16px'}}>
          <input type="radio" name="website" disabled />
          Others coming soon
        </label>
      </div>
    </aside>
  }
}
