import React from 'react'

const Section = ({title, children}) => {
    return (
        <section className="space-y-4 py-4">
            <header>
                <h2 className="uppercase text-xl">{title}</h2>
            </header>
            <div id="wrapper" className="">
                {children}
            </div>
        </section>
    )
}

export default Section