import React from 'react';
import { fetchAllData } from '../services/fetchData';
import styles from './Image.module.css'


class Image extends React.Component {

    state = {
        url: 'https://st2.depositphotos.com/1035449/6191/v/950/depositphotos_61915173-stock-illustration-vector-sketch-dog-staffordshire-bull.jpg',
        credit: '',
        caption: ''
    }

    

    componentDidMount() {

        
        fetchAllData()
        .then(data => {
            const creditLink = data.elements.mainImage.value;
            const webLInk = creditLink.leadImageCredit.value;
            const imgLink = creditLink.leadImage.renditions
            this.setState({
                urlDefault: `${webLInk}${imgLink.default.url}`,
                urlLead: `${webLInk}${imgLink.lead.url}`,
                urlCard: `${webLInk}${imgLink.card.url}`,
                credit: `${webLInk}`,
                caption: `${creditLink.leadImageCaption.value}`
                
            })
            }).then(state => console.log(this.state))
    }


    render(

    ){return (
        <div>
            <img 
            srcSet={`${this.state.urlCard} 640w, ${this.state.urlLead} 1200w, ${this.state.urlDefault} 1600w`}
            sizes="(max-width: 1200px) 640px, (max-width: 1600px) 1200px, 1600px"
            src={this.state.url} alt={this.state.caption}
            className={styles.mainImg}/>
            <div>
            <p>Credits to: {this.state.credit}</p>
            <p>{this.state.caption}</p>

            </div>
            
            
        </div>
    )}

}

export default Image;
