import React from 'react'
import data from '../util/data'
import Header from '../components/Header'
import Card from '../components/Card'
import '../style/Page.css'
function Page(){
   const cards = data.map(item =>{
    return(
        <Card
            key={item.id}
            {...item} 
            length={data.length}
        />
    )
   })
    return(
       <div className="main--layout">
        <Header/>
        <section className="cards-list">
            {cards}
        </section>
    </div>
    )
}

export default Page;