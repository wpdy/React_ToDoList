
const TableForTasks = (props) => {

    console.log(props.list)

    return (
        <table>
            <thead>
                <th>eil.nr</th>
                <th>uzduotis</th>
                <th>ar uzbaigta</th>
            </thead>

            <tbody>
                {
                    props.list.map((task, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.text}</td>
                            <td>{task.isCompleted ? 'Done' : 'Still in progress...'}</td>
                        </tr>
                    ))
                }
            </tbody>
            
        </table>
    )
}

export default TableForTasks