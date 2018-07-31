import React from 'react'

const ShowArticle = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-header bg-success">
                {props.titre}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.date}</h5>
                     <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowArticle