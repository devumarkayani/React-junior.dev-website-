import React from 'react'
import Feature from '../../components/feature/Feature'
import './feature.css'
const  Features = ()=> {
  const FeatureData=[
   { title:'Improving End Disrubts instanly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'

  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
  ]
  return (
    <div className='gpt__feature section-padding '>
      <div className='feature_heading'>
        <h1 className='linear-gradients'> The Featurer  is NOw and Just Need to Realize it.Step into Feature Today  &Make it Happen. </h1>
        <div className="feature-paragraph">
        <br />
       <p><a href='/' target='blank'> Request Early Access  to Get Started</a> </p>
        
      </div>
  
      </div>
      
      <div className="gpt_feature-container">
        {FeatureData.map((item,index)=>(
          <Feature title={item.title}  text={item.text} key={item.title+index}/>
        ))}
      </div>
    </div>
  )
}

export default Features