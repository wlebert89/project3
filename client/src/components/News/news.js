import React from 'React';

function News(props){
    return (
        <div>
            <h6><a href={props.link}>{props.title}</a></h6>
            <p>{props.summary}</p>
        </div>
    );
}

export default News;