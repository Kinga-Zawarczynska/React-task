import React from 'react';
import { fetchAllData } from '../services/fetchData';


class Article extends React.Component {

    state = {
        data: {}
    }

    componentDidMount() {
        fetchAllData()
            .then(data => {
                this.setState({
                    data: data
                })
            }).then(state => console.log(this.state.data))
            .catch((error) => new Error(error))
    }

    render(
    ) {
        const readyData = this.state.data
        console.log(this.state.data)
        if ({ readyData } !== {}) {
            
            return (
               
                <div>
                    <article>
                        <button onClick={() => console.log(this.state.data.elements)}>HEJ</button>

                        <p>{this.state.data.elements.mainImage.value.leadImageCaption.value}</p>
                    </article>
                </div>)
        } else {
            throw Error('halo')
        }
    }
}

export default Article;