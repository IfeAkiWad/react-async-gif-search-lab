import React, { Component } from 'react'
import GifList from './components/GifList'

export default class GifListContainer extends Component {
   state = {
       Giphy: []
   }
   
   componentDidMount() {
       fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=ulFMv0Z75OBUsib0HdFjMLkWoNq4nN9g&rating=g')
       .then(response => response.json())
       .then(gif => {
           this.setState({
               giphy: gif.images.url
           })
       })
   }

    render() {
        return (
            <div>
                <GifList list={this.state} />
            </div>
        )
    }
}
