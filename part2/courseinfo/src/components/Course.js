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

export default Course