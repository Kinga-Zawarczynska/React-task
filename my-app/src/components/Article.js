import React from 'react';
import { fetchAllData } from '../services/fetchData';
import styles from './Image.module.css'


class Article extends React.Component {

    state = {
        data: null,
        url: 'https://st2.depositphotos.com/1035449/6191/v/950/depositphotos_61915173-stock-illustration-vector-sketch-dog-staffordshire-bull.jpg'
    }

    componentDidMount() {
        fetchAllData()
            .then(data => {
                this.setState({
                    data: data
                })
            }).then(state => console.log(this.state.data))
            .catch((error) => new Error('Something went wrong!'))
    }

    render(
    ) {
        const readyData = this.state.data

        if (readyData !== null) {
            const creditLink = this.state.data.elements.mainImage.value;
            const webLink = creditLink.leadImageCredit.value;
            const imgLink = creditLink.leadImage.renditions

            return (


                <div>
                    <article>

                        <img
                            srcSet={`${webLink}${imgLink.card.url} 640w, ${webLink}${imgLink.lead.url} 1200w, ${webLink}${imgLink.default.url} 1600w`}
                            sizes="(max-width: 1200px) 640px, (max-width: 1600px) 1200px, 1600px"
                            src={this.state.url} alt="Smiley Staffordshire Terrier Dog playing in the garden"
                            className={styles.mainImg} />
                        <div>
                            <p>Credits to: {webLink}</p>
                            <p>{creditLink.leadImageCaption.value}</p>
                        </div>


                        <h1>{this.state.data.name}</h1>



                    </article>
                </div>)
        }
        else {
            return <p>Wait for your data!</p>
        }
    }
}

export default Article;