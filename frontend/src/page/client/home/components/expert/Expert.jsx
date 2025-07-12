import React from 'react'



function Title({ children }) {
    return (
        <small className='small'>{children}</small>
    )
}

function Image({ children }) {
    return (
        <div className='image'>{children}</div>
    )
}
function ExpertDisplay({ users, onSelect }) {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {users.map(user => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>
    );
}
function Location() {
    return (
        <div>Location</div>
    )
}
function Description() {
    return (
        <div>Description</div>
    )
}


function Date() {
    return (
        <div>Date</div>
    )
}

function Time() {
    return (
        <div>Time</div>
    )
}


function ClientInfo() {
    return (
        <div>ClientInfo</div>
    )
}





const Expert = {
    Title,
    Image,
    ExpertDisplay,
    Location,
    Description,
    Date,
    Time,
    ClientInfo

};

export default Expert