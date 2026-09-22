import { Link } from "react-router-dom"

function ManualMode(){
    return(
    
    <div className = "manual-mode">
        <h1>Create your own deduction grid</h1>
        <Link to='/' className="link">Back to Home</Link>
    </div>

    )
}

export default ManualMode
