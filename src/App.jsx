import { useParams } from 'react-router-dom'

const App = () => {
    const { x, y } = useParams();

    return (
        <div>{x}, {y}</div>
    )
}

export default App