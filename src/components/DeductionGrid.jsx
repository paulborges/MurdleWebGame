import {who, what, where} from "../data/puzzleData"

function DeductionGrid({category, items, getItemName}){
    return (
        <div className="deduction-grid">
            <table>
                <thead>
                    <tr>
                        <th>{category}</th>
                        {who.map((person)=> (
                            <th key={person.id}>
                                {person.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item)=>(
                        <tr key = {item.id}>
                            <th>
                                {getItemName(item)}
                            </th>
                            {who.map((person)=>(
                                <td key={person.id}></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DeductionGrid