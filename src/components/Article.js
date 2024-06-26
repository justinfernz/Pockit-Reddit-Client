import React from "react";

function Article(props) {
    return (
        <article >
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank" rel="noreferrer"> 
                <h3 data-testid="titles">{props.article.title}</h3>
            </a>
        </article>
    )
}

export default Article;