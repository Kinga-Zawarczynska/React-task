import React from 'react';
import { fetchAllData } from '../services/fetchData';


class Image extends React.Component {
    state = {
        url: 'https://st2.depositphotos.com/1035449/6191/v/950/depositphotos_61915173-stock-illustration-vector-sketch-dog-staffordshire-bull.jpg',
        credit: '',
        caption: ''
    }

    componentDidMount() {
        fetchAllData()
        .then(data => {
            this.setState({
                url: `${data.elements.mainImage.value.leadImageCredit.value}${data.elements.mainImage.value.leadImage.renditions.lead.url}`,
                credit: `${data.elements.mainImage.value.leadImageCredit.value}`,
                caption: `${data.elements.mainImage.value.leadImageCaption.value}`
                
            })
            }).then(state => console.log(this.state))
    }
    render(

    ){return (
        <div>
            <img src={this.state.url} alt={this.state.caption}/>>
            <caption>Credits to: {this.state.credit}</caption>
            
        </div>
    )}

}

export default Image;
