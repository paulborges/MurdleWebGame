import { Link } from "react-router-dom"


function GameModeCard({title, description, buttonText, path}){

    return(
        <div className="game-mode-card">
            <h2>{title}</h2>
            <p>{description}</p>
            
            <Link to={path} className="link">{buttonText}</Link>
        </div>
    )
}
export default GameModeCard
