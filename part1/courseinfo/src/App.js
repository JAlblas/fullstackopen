const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = ({ name, exercise }) => {
    return (
        <div>
            <p>
                {name} {exercise}
            </p>
        </div>
    )
}

const Content = ({ part1, part2, part3 }) => {
    return (
        <div>
            <Part name={part1.name} exercise={part1.exercises} />
            <Part name={part2.name} exercise={part2.exercises} />
            <Part name={part3.name} exercise={part3.exercises} />
        </div>
    )
}

const Total = (props) => {
    return <p> <b>Number of exercises:</b> {props.total} </p>
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

export default App