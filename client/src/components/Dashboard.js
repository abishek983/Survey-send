import React from 'react'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn right">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}
