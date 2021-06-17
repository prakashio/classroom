import React from 'react'
import './App.css'
import info from './info.json';

import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Card from './components/Card'
import { FiBriefcase, FiFeather, FiCommand } from 'react-icons/fi'
import Header from './components/Header';

function App() {
  const { user, classes, socials } = info;

  const IconSet = {
    finance: FiBriefcase,
    business: FiFeather,
    all: FiCommand
  }
  
  return (
    <main className="grid grid-cols-12 bg-black">
      <div className="col-span-1">
        <Sidebar user={user} socials={socials} />
      </div>
      <div className="col-span-11 rounded-l-3xl bg-white">
        <Header />
        <div className="grid grid-cols-3 h-5/6">
          <div className="col-span-2 px-8">
            <Section title="mba classes">
              <div className="grid grid-cols-3 gap-4">
                {classes.map(({name, teacher, meetLink, type}, idx) => 
                  <Card title={name} author={teacher} key={idx} idx={idx} action={meetLink} Icon={IconSet[type]} />
                )}
              </div>
            </Section>
          </div>
          <div className="col-span-1 px-8 rounded-t-3xl py-4 bg-red-200 items-stretch">
            <Section title="Notes"></Section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
