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
                part => { return (<Part name={part.name} exercises={part.exercises} key={part.id} />) }
            )}
        </div>
    )
}

const Total = (props) => {
    return <p> <b>Total number of exercises:</b> {props.total} </p>
}

const Course = ({ course, exercisesNumber }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={exercisesNumber} />
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            {
                courses.map(course =>
                    <Course
                        key={course.id}
                        course={course}
                        exercisesNumber={course.parts.reduce((sum, part) => sum + part.exercises, 0)}

                    />
                )
            }
        </div>
    )
}



export default App