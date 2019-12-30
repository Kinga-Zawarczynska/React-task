import * as React from 'react';
import { fetchAllData } from '../services/fetchData';
import styles from './Article.module.css';
import ReactHtmlParser from 'react-html-parser';
import Image from './Image';
import PropTypes from 'prop-types';

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
    }

    render(
    ) {
        const readyData = this.state.data;
        if (readyData !== null && !this.state.hasError) {

            const apiUrl = 'https://my12.digitalexperience.ibm.com/859f2008-a40a-4b92-afd0-24bb44d10124';
            const creditLink = readyData.elements.mainImage.value;
            const webLink = creditLink.leadImageCredit.value;
            const imgLink = creditLink.leadImage.renditions;
            const createdAt = new Date(`${readyData.created}`).getTime();
            const displayDate = new Date(createdAt).toLocaleDateString();
            const articleBodyDisplay = readyData.elements.body.values.join(" ");

            return (
                <div>
                    <article className={styles.article}>
                        <div className={styles.date}>Created at: {displayDate}</div>
                        <div className={styles.topPage}>
                            <div className={styles.articleTitle}>
                                <h1>{readyData.name}</h1>
                                <p>by {readyData.elements.author.value}</p>
                            </div>
                            <Image
                                srcSet={`${apiUrl}${imgLink.card.url} 400w, ${apiUrl}${imgLink.lead.url} 600w, ${apiUrl}${imgLink.default.url} 800w`}
                                sizes="(max-width: 500px) 150px,(max-width: 950px) 180px, (max-width: 1500px) 300px, (max-width: 1850px) 400px, 500px"
                                src={this.state.url} alt="Smiley Staffordshire Terrier Dog playing in the garden"
                                caption={creditLink.leadImageCaption.value}
                                webLink={webLink}
                            />
                        </div>
                        <div className={styles.articleBodyDisplay}>{ReactHtmlParser(articleBodyDisplay)}</div>
                    </article>
                </div>)
        }
        else {
            return (
                <p className={styles.loader}>Wait, we're preparing your article!</p>
            )

        }
    }
}

Article.propTypes = {
    Image: PropTypes.element
};

export default Article;