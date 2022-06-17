import React from 'react'
import { Featured } from '../../components/featured/Featured'
import { List } from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import "./home.css"

export const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
       <Featured type="series"/>
       <List/>
       <List/>
       <List/>
       <List/>
    </div>
  )
}
