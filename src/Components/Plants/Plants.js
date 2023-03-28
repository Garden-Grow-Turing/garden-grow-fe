import './Plants.css'
import PlantCard from '../PlantCard/PlantCard'

const Plants = () => {
  return (
    <section className="plants-page">
      <h1 className='plants-title'>90210 Fruits and Vegetables {/* This will be a prop passed down depending if this component is used for results *90210 Fruits and Vegetables* or favorites *My Garden* */}</h1>
      <section className='plants-display-grid' >
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        {/* This is going to eventually be the mapped out plants */}
      </section>
    </section>
  )
}

export default Plants