import React from 'react'

import './styles.css'

const Card = ({ title, description, action, Icon, author }) => {
    
    return (
        <div className="c-course-card">
            <a href={action} target="_blank" className="border-2 rounded-xl border-blue-400 p-8 space-y-1 grid text-center justify-center">
                <Icon className="w-12 h-12 stroke-1 mx-auto course-icon" />
                <p className="font-bold text-xl tracking-wide">{title}</p>
                <p className="text-sm text-cool-gray-400">{author}</p>
                <p>{description}</p>
            </a>
        </div>
    )
}

export default Card