import {who, where, what} from "../data/puzzleData";

function PuzzleSidebar(){
    return(
        <aside className="puzzle-sidebar">
            <h2>Case Information</h2>
            <div className="sidebar-section">
                <h3>Suspects</h3>
                {who.map((user)=>(
                    <div key = {user.id} className="suspect-info">
                        <h4>{user.name}</h4>
                        <p>{user.description}</p>
                        <p>Height: {user.height}</p>
                        <p>Hair: {user.hair}</p>
                        <p>Eyes: {user.eyes}</p>
                        <p>Hand: {user.hand}</p>
                    </div>
                ))}    
            </div>
            <h3>Locations</h3>
            <h3>Weapons</h3>
        </aside>
    )
}

export default PuzzleSidebar