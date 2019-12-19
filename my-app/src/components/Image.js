import React from 'react';
import { fetchAllData } from '../services/fetchData';


class Image extends React.Component {
    state = {
        url: 'https://st2.depositphotos.com/1035449/6191/v/950/depositphotos_61915173-stock-illustration-vector-sketch-dog-staffordshire-bull.jpg',
        thumbnail: '',
        credit: '',
        caption: ''
    }

    componentDidMount() {
        fetchAllData()
        .then(data => {
            this.setState({
                url: `${data.elements.mainImage.value.leadImageCredit.value}${data.elements.mainImage.value.leadImage.renditions.lead.url}`,
                thumbnail: `${data.elements.mainImage.value.leadImageCredit.value}${data.thumbnail.url}`,
                credit: `${data.elements.mainImage.value.leadImageCredit.value}`,
                caption: `${data.elements.mainImage.value.leadImageCaption.value}`
                
            })
            }).then(state => console.log(this.state))
    }


    render(

    ){return (
        <div>
            <img 
            srcSet={`${this.state.thumbnail} 500w, ${this.state.url} 800w `}
            sizes="(max-width: 600px) 500px, 800px"
            src={this.state.url} alt={this.state.caption}/>
            <p>Credits to: {this.state.credit}</p>
            
        </div>
    )}

}

export default Image;
