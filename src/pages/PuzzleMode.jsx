import { Link } from "react-router-dom"
import PuzzleSidebar from "../components/PuzzleSidebar"

function PuzzleMode(){
    return(
    
    <div className = "puzzle-mode">
        <h1>Welcome to Puzzle Mode</h1>
        
        <div className="puzzle-layout">
            <PuzzleSidebar/>
            <main className="puzzle-game-area">
                <h2>Game Area</h2>
            </main>
        </div>

        <Link to='/' className="link">Back to Home</Link>
    </div>

    )
}

export default PuzzleMode
