import * as React from 'react';
import { fetchAllData } from '../services/fetchData';
import styles from './Article.module.css';
import ReactHtmlParser from 'react-html-parser';




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
            })
            .catch((error) => new Error('Something went wrong!'))
    }

    render(
    ) {
        const readyData = this.state.data

        if (readyData !== null) {

            const apiUrl = 'https://my12.digitalexperience.ibm.com/859f2008-a40a-4b92-afd0-24bb44d10124';
            const creditLink = this.state.data.elements.mainImage.value;
            const webLink = creditLink.leadImageCredit.value;
            const imgLink = creditLink.leadImage.renditions
            const createdAt = new Date(`${readyData.created}`).getTime()
            const displayDate = new Date(createdAt).toLocaleDateString()
            let articleBodyDisplay = this.state.data.elements.body.values.join(" ")

            return (
                <div>
                    <article className={styles.article}>
                        <div className={styles.date}>Created at: {displayDate}</div>
                        <div className={styles.topPage}>
                            <div className={styles.pictureDisplay}>
                        <img
                            srcSet={`${apiUrl}${imgLink.card.url} 250w, ${apiUrl}${imgLink.lead.url} 400w, ${apiUrl}${imgLink.default.url} 600w`}
                            sizes="(max-width: 500px) 100px,(max-width: 1200px) 150px, (max-width: 1600px) 200px, 300px"
                            src={this.state.url} alt="Smiley Staffordshire Terrier Dog playing in the garden"
                            className={styles.mainImg} />
                            <div className={styles.picDescription}>
                            <p>{creditLink.leadImageCaption.value}</p>
                            <p>Credits to: {webLink}</p>
                            
                        </div>
                        </div>
                        <div className={styles.articleTitle}>
                             <h1>{readyData.name}</h1>
                             <p>by {readyData.elements.author.value}</p>
                             </div>
                        </div>

                        <div className={styles.articleBodyDisplay}>{ReactHtmlParser(articleBodyDisplay)}</div>
                        
                    </article>
                </div>)
        }
        else {
            return (
                <p>Wait, we're preparing your article!</p>
            )
        }
    }
}

export default Article;