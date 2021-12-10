import React from 'react';

function Randomiser(props) {

    return (
        <>
            <div className="Randomiser">
                {props.items.map(({id, value}) => (
                    <div className="item" id={id}>
                        <p>{value}</p>
                        <div className="edit" onClick={props.onEdit}>
                            <i class="fas fa-marker"></i>
                            <input type="text" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Randomiser;