import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifList'

export default class GifListContainer extends Component {
   state = {
       giphy: []
   }
   
   componentDidMount() {
       fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=ulFMv0Z75OBUsib0HdFjMLkWoNq4nN9g&rating=g')
       .then(response => response.json())
       .then(gifData => {
           let gifs = gifData.data
           console.log('glc', gifData.data) 
           this.setState({
               giphy: gifs
           })
       })
   }

   handleSubmitForm = (event) => {
    event.preventDefault()
   }

    render() {
        return (
            <div>
                <GifList list={this.state.giphy} />
                {/* <GifSearch OnSubmit={this.submitForm} /> */}
            </div>
        )
    }
}
