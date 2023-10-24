import React from "react";
import Card from "./Card";

const Robots = ({ robohashs }) => {
    return (
        <div>
            {
                robohashs.map((user, i) => {
                    return (
                        <Card
                        key={i}
                        id={robohashs[i].id}
                        name={robohashs[i].name}
                        email={robohashs[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

export default Robots;