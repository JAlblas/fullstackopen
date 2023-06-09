const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = ({ name, exercises }) => {
    return (
        <div>
            <p>
                {name}: {exercises}
            </p>
        </div>
    )
}

const Content = ({ parts }) => {
    console.log(parts)
    return (
        <div>
            {parts.map(
                part => { return (<Part name={part.name} exercises={part.exercises} />) }
            )}
        </div>
    )
}

const Total = (props) => {
    return <p> <b>Number of exercises:</b> {props.total} </p>
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
    const exercisesSum = parts.reduce((sum, part) => (sum + part.exercises), 0)

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total total={exercisesSum} />
        </div>
    )
}

export default App