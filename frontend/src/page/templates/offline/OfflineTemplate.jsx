import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'

function OfflineTemplate({ children }) {
    return (
        <div className="offline-template">
            <Sidebar />
            <div>{children}</div>
        </div>
    )
}

export default OfflineTemplate