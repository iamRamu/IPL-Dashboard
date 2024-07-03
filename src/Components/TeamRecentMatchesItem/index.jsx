import './index.css'
const TeamRecentMatchesItem = props => {
    const {eachMatchDetails} = props
    const {competing_team_logo, competing_team, result, match_status} = eachMatchDetails
    let matchStatusColor;
    switch (match_status) {
        case "Won":
            matchStatusColor = "green"
            break;
    
        default:
            matchStatusColor = "red"
            break;
    }
    let isKKR;
    if(competing_team === "Kolkata Knight Riders"){
        isKKR = "kkr-logo"
    }
    return(
        <li className='recent-match-li-container'>
            <img src={competing_team_logo} className={`each-match-opponent-team-logo ${isKKR}`}/>
            <h2 className='h2-headings'>{competing_team}</h2>
            <p className='result'>{result}</p>
            <p className={`${matchStatusColor}`}>{match_status}</p>
        </li>
    )
}
export default TeamRecentMatchesItem