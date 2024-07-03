import { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import TeamCard from '../TeamCard'
const Home = () => {
    const [teams, setTeams] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        const getTeams = async()=>{
            try {
                setIsLoading(true)
                const response = await axios.get("https://apis.ccbp.in/ipl")
                const data = await response.data.teams
                setTeams(data)
                setIsLoading(false)
            } catch (error) {
                console.log(`error`, error.message)
            }
        }
        getTeams()
    },[])
    return(
        <div className="home-bg-container">
            {isLoading ? <p className='loading'>Loading...</p> : 
                <div>
                <div className='home-top-container'>
                    <img src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt='ipl-logo' className='ipl-logo'/>
                    <h1 className='ipl-dashboard-heading'>IPL Dashboard</h1>
                </div>
                {/* {isLoading ? <p className='loading'>Loading..</p> :  */}
                    <ul className='home-ul-container'>
                        {teams.map(eachTeam => <TeamCard teamDetails={eachTeam} key={eachTeam.id}/>)}
                    </ul>
                </div>
            }
        
            
        </div>
    )
}
export default Home