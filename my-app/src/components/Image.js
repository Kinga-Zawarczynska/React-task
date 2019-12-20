import * as React from 'react'

class Image extends React.Component{



render(){


return(
    <div>
    <img
    srcSet={`${apiUrl}${imgLink.card.url} 250w, ${apiUrl}${imgLink.lead.url} 400w, ${apiUrl}${imgLink.default.url} 600w`}
    sizes="(max-width: 500px) 100px,(max-width: 1200px) 150px, (max-width: 1600px) 200px, 300px"
    src={this.state.url} alt="Smiley Staffordshire Terrier Dog playing in the garden"
    className={styles.mainImg}
/>
    <div className={styles.picDescription}>
        <p>{creditLink.leadImageCaption.value}</p>
        <p>Credits to: <a href="https://www.depositphotos.com" target="blank">{webLink}</a></p>

    </div>
    </div>
)}
}
