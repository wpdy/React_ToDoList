
import Table from 'react-bootstrap/Table';


const TableForTasks = (props) => {

    // console.log(props.list)
    console.log(props)

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Task Nr.</th>
                    <th>Task</th>
                    <th>Progress</th>
                </tr>
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
        </Table>
    )
}

export default TableForTasks


