import React from "react";

const Card = ({ email, name, id }) => {
    return (
        <div className="bg-light-purple dib br4 pa3 ma2 grow bw2 tc shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}}?300x300`} />
            <div>
                <h2> { name } </h2>
                <p> { email } </p>
            </div>
        </div>
    );
}

export default Card;