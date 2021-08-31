import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        console.log(this.props.list)
        let imgTag = this.props.list.map(gif => <img key={gif.id} src={gif.images.original.url}></img>)
        return (
            <div>
                <ul>
                    <li>
                        {imgTag}
                    </li>
                </ul>
            </div>
        )
    }
}
