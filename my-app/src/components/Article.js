import React from 'react';
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
                            srcSet={`${webLink}${imgLink.card.url} 640w, ${webLink}${imgLink.lead.url} 1200w, ${webLink}${imgLink.default.url} 1600w`}
                            sizes="(max-width: 1200px) 640px, (max-width: 1600px) 1200px, 1600px"
                            src={this.state.url} alt="Smiley Staffordshire Terrier Dog playing in the garden"
                            className={styles.mainImg} />
                            <div className={styles.picDescription}>
                            <p>Credits to: {webLink}</p>
                            <p>{creditLink.leadImageCaption.value}</p>
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