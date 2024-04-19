import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/header'
import ExploreMenu from '../../components/ExploreMenu/exploreMenu'
import FoodDisplay from '../../components/FoodDisplay/foodDisplay'
import AppDownload from '../../components/AppDownload/appDownload'

const home = () => {
  const [ category, setCategory] = useState("All")
  
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} setCategory={setCategory} />
        < AppDownload/>
    </div>
  )
}

export default home