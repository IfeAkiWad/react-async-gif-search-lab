import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        giphySearch: "dolphin"
    }

    handleGiphySearch(event) {
        this.setState({
            giphySearch: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                    onChange={event => this.handleGiphySearch(event)}
                    value={this.state.giphySearch}/>
                </form> 
            </div>
        )
    }
}
