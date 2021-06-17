import React from 'react'
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ user, socials }) => {
    const { name, profilePicture } = user;
    return (
        <aside className="bg-black h-screen text-white grid justify-center py-12">
            <div className="logo self-start text-center justify-self-center">
                <img className="rounded-full w-12 h-12 mx-auto border-2 border-blue-200" src={profilePicture} />
                <span className="my-2 inline-block text-md">{name}</span>
            </div>
            <nav className="">
                <ul className="grid justify-between h-full">
                    {
                        socials.map(({ platform, link }, idx) => <li key={idx}><a className="" href={link} title={platform}>{platform}</a></li>)
                    }
                </ul>
            </nav>
            <div className="setting self-end items-center justify-self-center">
                <FiSettings className="w-8 h-8" />
            </div>
        </aside>
    ) 
}

export default Sidebar;