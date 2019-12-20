import * as React from 'react'
import styles from './Article.module.css';

class Image extends React.Component {



    render() {
        return (
            <div>
                <img
                    srcSet={this.props.srcSet}
                    sizes={this.props.sizes}
                    src={this.props.src} alt={this.props.alt}
                    className={styles.mainImg}
                />
                <div className={styles.picDescription}>
                    <p>{this.props.caption}</p>
                    <p>
                        Credits to:<a href="https://www.depositphotos.com" target="blank">{this.props.webLink}</a>
                    </p>
                </div>
            </div>
        )
    }
}


export default Image;