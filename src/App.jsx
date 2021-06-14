import React from 'react'
import './App.css'
import info from './info.json';

import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Card from './components/Card'
import { FiAirplay } from 'react-icons/fi'
import Header from './components/Header';

function App() {
  const { name, classes } = info;
  
  return (
    <main className="grid grid-cols-12 bg-black">
      <div className="col-span-1">
        <Sidebar user={name} />
      </div>
      <div className="col-span-11 rounded-l-3xl bg-white container mx-auto px-8">
        <Header />
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Section title="mba classes">
              <div className="grid grid-cols-4 gap-4">
                {classes.map(({name, teacher, meetLink}) => 
                  <Card title={name} author={teacher} action={meetLink} Icon={FiAirplay} />
                )}
              </div>
            </Section>
          </div>
          <div className="col-span-1 bg-blue-100 px-8">
            Another
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
