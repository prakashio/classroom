import React from 'react'

const Section = ({title, children}) => {
    return (
        <section className="space-y-4 py-4">
            <header>
                <h2 className="capitalize text-xl">
                    {title.split(' ').map((label, idx) => <span key={idx} className={idx === 0 ? "font-normal" : "font-bold"}>{label} </span>)}
                </h2>
            </header>
            <div id="wrapper" className="">
                {children}
            </div>
        </section>
    )
}

export default Section