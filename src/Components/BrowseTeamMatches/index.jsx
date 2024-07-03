import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import './index.css'
import TeamRecentMatchesItem from "../TeamRecentMatchesItem"

const BrowseTeamMatches = () => {
    const [teamDetailedView, setTeamDetailedView] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    console.log(`browseDetails`, teamDetailedView)
    const {id} = useParams()
    // console.log(`params`, useParams())
    // console.log("data2", teamDetailedView)
    let backgroundColor;
    switch (id) {
        case "RCB":
            backgroundColor = "#E1261C"
            break;
        case "KKR":
            backgroundColor = "purple"
            break;
        case "KXP":
            backgroundColor = "#E1261C"
            break;
        case "CSK":
            backgroundColor = "#FFD141"
            break;
        case "RR":
            backgroundColor = "blue"
            break;
        case "MI":
            backgroundColor = "#004B8D"
            break;
        case "SH":
            backgroundColor = "#F98E2B"
            break;
        default:
            backgroundColor = "#E1261C"
            break;
    }
    useEffect(()=>{
        const getTeamDetails = async() => {
            try {
                setIsLoading(true)
                const response = await axios.get(`https://apis.ccbp.in/ipl/${id}`)
                const data = await response.data
                setTeamDetailedView(data)
                setIsLoading(false)
            } catch (error) {
                console.log(`error`, error.message)
            }
        }
        getTeamDetails()
    },[])
    return(
        <div style={{backgroundColor:`${backgroundColor}`}} className="browseTeam-bg-container">
            {isLoading ? <p className="loading">Loading...</p> :
                teamDetailedView &&
                    <div>
                        <div>
                             <img src={teamDetailedView.team_banner_url} className="bg-team-banner"/>
                        </div>
                        <p className="latest-matches">Latest Matches</p>
                        <div className="latest-match-details-container">
                            <div className="latest-match-details">
                                <h2 className="h2-heading">{teamDetailedView.latest_match_details.competing_team}</h2>
                                <p>{teamDetailedView.latest_match_details.date}</p>
                                <p>{teamDetailedView.latest_match_details.venue}</p>
                                <p>{teamDetailedView.latest_match_details.result}</p>
                            </div>
                            <div className="latest-match-logo-container">
                                <img src={teamDetailedView.latest_match_details.competing_team_logo} className="latest-match-opponent-logo"/>
                            </div>
                            <div className="latest-match-details1">
                                <p className="p1">First Innings</p>
                                <p className="p1">{teamDetailedView.latest_match_details.first_innings}</p>
                                <p className="p1">Second Innings</p>
                                <p className="p1">{teamDetailedView.latest_match_details.second_innings}</p>
                                <p className="p1">Man Of The Match</p>
                                <p className="p1">{teamDetailedView.latest_match_details.man_of_the_match}</p>
                                <p className="p1">Umpires</p>
                                <p className="p1">{teamDetailedView.latest_match_details.umpires}</p>
                            </div>
                        </div>
                            <ul className="recent-matches-ul-container">
                                {teamDetailedView.recent_matches.map(eachMatch => <TeamRecentMatchesItem key={eachMatch.id} eachMatchDetails={eachMatch}/>)}
                            </ul>
                    </div>
                    
            }
            
        </div>
    )
}
export default BrowseTeamMatches