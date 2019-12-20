import * as React from 'react';
import styles from './Article.module.css';
import PropTypes from 'prop-types';

class Image extends React.Component {
   static defaultProps = {
    srcSet: '',
    sizes: "(max-width: 500px) 100px,(max-width: 1200px) 150px, (max-width: 1600px) 200px, 300px",
    src: 'https://st2.depositphotos.com/1035449/6191/v/950/depositphotos_61915173-stock-illustration-vector-sketch-dog-staffordshire-bull.jpg',
    alt: 'Image description',
    className: ''

   }

    render() {
        return (
            <div>
                <img
                    srcSet={this.props.srcSet}
                    sizes={this.props.sizes}
                    src={this.props.src} 
                    alt={this.props.alt}
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

Image.propTypes = {
    srcSet: PropTypes.string,
    sizes: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.string
  };


export default Image;