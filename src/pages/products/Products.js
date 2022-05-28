import React from 'react'
import Header from '../portfolio/Header'
import Content from '../../components/Content'
import './style.scss'
import Feature from './Feature'
import products from '../../data/products.json'

function Products() {
  return (
    <div id='products'>
        <Header 
            title="Products"
            desc="An all-in-one, agile Enterprise Resource Planning platform to manage and accelerate your business operations – marketing, sales and administration, etc. This fully automated and customizable management information system that works smoothly to help companies their ultimate goals of intelligent workflows, operational efficiency and increased customer satisfaction, etc., and produce positive results regarding performance and productivity."
            social={false}
        />
        {
          products.map((item, index)=>(
            <>
              <Content 
                  title={item?.name}
                  img={item?.image}
                  desc={item?.description}
                  contentRight={ index % 2 == 0 ? false : true}
              />
              <Feature 
                data={item.feature}
              />
            </>
          ))
        }
        
    </div>
  )
}

export default Products