import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
    const {teamDetails} = props
    const {id, name, team_image_url} = teamDetails
    return(
        <Link to={`/team-matches/${id}`} className='list-container1' >
            <li className='list-container'>
                <img src={team_image_url} className='teamcard-img'/>
                <h1 className='teachcard-name'>{name}</h1>
            </li>
        </Link>
    )
}
export default TeamCard