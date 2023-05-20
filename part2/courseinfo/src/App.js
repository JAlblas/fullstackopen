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

const Course = ({ course, parts, exercisesSum }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={exercisesSum} />
        </div>
    )
}

/* const App = () => {
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
} */

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }
    const exercisesSum = course.parts.reduce((sum, part) => (sum + part.exercises), 0)

    return <Course course={course} exercisesSum={exercisesSum} />
}

export default App