const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = ({ part, exercise }) => {
    return (
        <div>
            <p>
                {part} {exercise}
            </p>
        </div>
    )
}

const Content = ({ part1, exercise1, part2, exercise2, part3, exercise3 }) => {
    return (
        <div>
            <Part part={part1} exercise={exercise1} />
            <Part part={part2} exercise={exercise2} />
            <Part part={part3} exercise={exercise3} />
        </div>
    )
}

const Total = (props) => {
    return <p> <b>Number of exercises:</b> {props.total} </p>
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App