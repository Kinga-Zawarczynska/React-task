import React from 'react';
import { fetchAllData } from '../services/fetchData';


class Article extends React.Component {

    state = {
        data: null
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
        if ( readyData  !== null){
            
            return (
                
               
                <div>
                    <article>
                        <button onClick={() => console.log(this.state.data.elements)}>HEJ</button>

                        <p>{this.state.data.thumbnail.id}</p>
                    </article>
                </div>)
        } 
        else {
            return <p>Wait for your data!</p>
        }
    }
}

export default Article;