import React from 'react'

const Sidebar = ({user}) => {
    return (
        <aside className="bg-black h-screen text-white grid justify-center py-12">
            <div className="logo self-start justify-center">
                <img  className="rounded-full mx-auto" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80"/>
                <span className="my-1 text-lg font-bold">{user}</span>
            </div>
            <nav className="">
                <ul className="grid justify-between h-full">
                    <li>Icon 1</li>
                    <li>Icon 1</li>
                    <li>Icon 1</li>
                </ul>
            </nav>
            <div className="setting self-end">
                Settings
            </div>
        </aside>
    ) 
}

export default Sidebar;