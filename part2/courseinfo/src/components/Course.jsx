const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part.name} {props.part.exercises}</p>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
        </div>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
    return (
        <p><b>Total Number of Exercises: {total}</b></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course