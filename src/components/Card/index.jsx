import React from 'react'

const Card = ({title, description, action, Icon, author}) => {
    return (
        <a href={action} target="_blank" className="border p-8 grid text-center justify-center">
            <Icon className="w-12 h-12 mx-auto" />
            <p className="font-bold tracking-wide">{title}</p>
            <p className="text-xs">{author}</p>
            <p>{description}</p>
        </a>
    )
}

export default Card