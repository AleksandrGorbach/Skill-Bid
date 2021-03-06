import Layout from "../../components/Layout/Layout"
import Card from "../../components/Card/Card"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import { useState } from "react"
import "./Home.css"

export default function Home(props) {
    const [value, setValue] = useState('All')
    const [budget, setBudget] = useState(0)
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    const changeBudget = (e) => {
        setBudget(e.target.value)
    }
    
return (
  <Layout user={props.user} setUser={props.setUser}>
    <ImageSlider />
        <div className="mainview">
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="filter-container">

                <form id="filterByType">
                    <label id='filterBy'>Filter By </label>
                    <select id="optionFilter" onChange={handleChange}>
                        <option value="All">All</option>
                        <option value="Bathroom">Bathroom</option>
                        <option value="Ceiling">Ceiling</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Floor">Floor</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Paint">Paint</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Roof">Roof</option>
                        <option value="Wall">Wall</option>
                    </select>
                </form>
                <form className="budget-filter" onChange={changeBudget}>                   
                    <li><label htmlFor="under10000">Under<br /> $10,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under10000"
                        value="10000"
                    /></li>
                    <li><label htmlFor="under20000">Under<br /> $20,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under20000"
                        value="20000"
                    /></li>
                    <li><label htmlFor="under30000">Under<br /> $30,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under30000"
                        value="30000"
                    /></li>
                    <li><label htmlFor="under40000">Under<br /> $40,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under40000"
                        value="40000"
                    /></li>
                    <li><label htmlFor="under50000">Under<br /> $50,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under50000"
                        value="50000"
                    /></li>
                    <li><label htmlFor="under60000">Under<br /> $60,000</label>
                    <input
                        id="budget_input"
                        type="checkbox"
                        name="under60000"
                        value="60000"
                    /></li>
                    <li><label htmlFor="under70000">Under<br /> $70,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under70000"
                        value="70000"
                    /></li>
                    <li><label htmlFor="under80000">Under<br /> $80,000</label>
                    <input
                        id="budget_input" 
                        type="checkbox"
                        name="under80000"
                        value="80000"
                    /></li>
                    <li><label htmlFor="under90000">Under<br /> $90,000</label>
                    <input 
                        id="budget_input"
                        type="checkbox"
                        name="under90000"
                        value="90000"
                    /></li>
                    <li><label htmlFor="under100000">Under<br /> $100,000</label>
                    <input 
                        id="budget_input"
                        type="checkbox"
                        name="under100000"
                        value="100000"
                    /></li>
                </form>
            </div>
            <Card value ={value} budget={budget} user={props.user}/>
        </div>
    </Layout>
)
}