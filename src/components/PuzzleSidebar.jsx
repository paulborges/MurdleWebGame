import {who, where, what} from "../data/puzzleData";

function PuzzleSidebar(){
    return(
        <aside className="puzzle-sidebar">
            <h2>Case Information</h2>
            <div className="sidebar-section">
                <h3>Suspects</h3>
                {who.map((user)=>(
                    <div key = {user.id}>
                        <h4>{user.name}</h4>
                        <h4>{user.description}</h4>
                        <h4>{user.height}</h4>
                        <h4>{user.hair}</h4>
                        <h4>{user.eyes}</h4>
                        <h4>{user.hand}</h4>
                    </div>
                ))}    
            </div>
            <h3>Suspects</h3>
            <h3>Locations</h3>
            <h3>Weapons</h3>
        </aside>
    )
}

export default PuzzleSidebar