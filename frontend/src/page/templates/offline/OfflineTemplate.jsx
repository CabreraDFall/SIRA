import "./offline-template.css";
import React from "react";

function OfflineTemplate({ children }) {
    return (
        <div className="offline-template">
            <div className="menu">
                <div className='logo'>
                    <h3>
                        SIRA
                    </h3>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default OfflineTemplate