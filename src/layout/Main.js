import React, { Component } from 'react'
import { ACCESS_KEY } from '../config'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      pageNumber: 1,
      div: ''
    }
  }

  findMinHeightRef () {
    const arr = [
      this.refs.col1,
      this.refs.col2,
      this.refs.col3
    ]

    let ref = arr[0]

    arr.forEach(a => {
      console.log(a, a.clientHeight, ref.clientHeight)
      if(a.clientHeight < ref.clientHeight) {
        ref = a
      }
    })
    
    return ref
  }

  fetchImageFromFlickr () {

    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=26d06543a026bd9b6e91fe87739c2b31&per_page=10&format=json&nojsoncallback=1`

    fetch (url)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      this.setState({
        div: ''
      })
      let div = response.photos.photo.map(
        ({ farm, server, id, secret, title }, i) => {
          let imgUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`
          let imgDonwload = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_h.jpg`
          // console.log(imgUrl)

          return <a href={imgDonwload} target="_blank" rel="noopener" key={i} >
            <img src={imgUrl} alt={title} />
          </a>
        })

      this.setState({
        div: div
      })
    })

  }

  fetchImageFromUnsplash () {
    let { pageNumber } = this.state
    let url = `https://api.unsplash.com/`
      + `photos?page=${pageNumber}`
      + `&client_id=${ACCESS_KEY.unsplash}`

    fetch(url)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        this.setState({
          div: ''
        })

        let div = response.map((img, index) => {
          const imageLink = img.urls.small
          const imageDownload = img.links.html

          // let ref = this.findMinHeightRef()

          // console.log('result ',  ref )

          // let a = document.createElement('a')
          // a.href = imageDownload
          // a.target = '_blank'
          // a.rel = 'noopener'
          // a.key = { index }

          // let image = document.createElement('img')
          
          // a.appendChild(image)
          
          // this.refs.main.appendChild(a)
          
          // let downloadingImage = new Image();
          
          // downloadingImage.onload = function () {
          //   image.src = imageLink
          // }
          // downloadingImage.src = imageLink
          
          return <a href={imageDownload} target="_blank" rel="noopener" key={index} >
            <img src={imageLink} alt={img.color} />
          </a>
        })
        this.setState({
          div: div
        })
      })
  }

  fetchApropriatePhotos (w) {
    switch (w) {
      case '1':
        this.fetchImageFromUnsplash()
        break
      case '2':
        this.fetchImageFromFlickr()
        break
      default:
        this.fetchImageFromUnsplash()
        break
    }
  }

  componentDidMount() {
    this.fetchApropriatePhotos(this.props.website)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.website !== nextProps.website) {
      this.fetchApropriatePhotos(nextProps.website)
    }
  } 

  render () {
    const { div } = this.state
    return <main className="images" ref="main">
        { div }
      {/* <div ref="col1" className="col1" >
      </div>
      <div ref="col2" className="col2" ></div>
      <div ref="col3" className="col3" ></div> */}
    </main>
  }
}
