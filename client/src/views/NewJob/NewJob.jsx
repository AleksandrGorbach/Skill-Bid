import {useState} from 'react'
import Layout from "../../components/Layout/Layout"
import {createJob} from "../../services/jobs"
import { useHistory } from 'react-router'
import "./NewJob.css"

export default function NewJobs(props) {
    const[input, setInput] = useState({projectType: "Bathroom"})
    const history = useHistory()

    const handleChange = (e) => {
        const {id, value} = e.target;

        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createJob(input)
        history.push('/')
    }


    return (
        <div>
            <Layout user={props.user} setUser={props.setUser}>
                <>
                    <h1>New<span>Job</span></h1>
                    <br />
                <div className="jobpost-container">
                    <form onSubmit={handleSubmit}>
                        <br />
                        <label>Name</label>
                        <br />
                        <br />
                        <input className="input"
                            placeholder="Name"
                            type="text"
                            id="name"
                            value={input.name}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <label>Project
                        <br />
                        <br />
                        <select className="dropdown" id="projectType" onChange={handleChange}>
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
                        </label>
                        <br />
                        <br />
                        <textarea className="input"
                            placeholder="Job description"
                            type="text"
                            id="description"
                            value={input.description}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <label>Budget</label>
                        <br />
                        <br />
                        <input className="input"
                            placeholder="$"
                            type="number"
                            id="budget"
                            value={input.budget}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <button className="btn">Submit</button>
                    </form>
                </div>
                </>
            </Layout>
        </div>
    )

}