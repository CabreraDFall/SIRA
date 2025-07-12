import React, { useState } from 'react'
import Expert from './components/expert/Expert'
import expertImg from '../../../assets/img/expertImg.png'
import './home.css'



const USER = [
    {
        id: 1,
        name: 'John Doe',
    }, {
        id: 2,
        name: 'Jane Smith',
    }
]



function Home() {


    const [selectedUserId, setSelectedUserId] = useState(USER[0].id);

    const handleSelect = (id) => {
        setSelectedUserId(Number(id));
    };

    const selectedUser = USER.find(user => user.id === selectedUserId);
    return (
        <div>
            <div>Select date and time</div>
            <div className="expert-section">
                <div className="expert-details">
                    <div>

                        <Expert.Image>
                            <img src={expertImg} alt="Example" />
                        </Expert.Image>
                    </div>
                    <div className="expert-info">
                        <Expert.Title>
                            Barber
                        </Expert.Title>
                        <Expert.ExpertDisplay users={USER} onSelect={handleSelect} />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home