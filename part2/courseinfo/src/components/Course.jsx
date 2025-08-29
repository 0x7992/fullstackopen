const Course = ({course}) =>{

  return(
    <div>
      <h1>Web development curriculum</h1>
      {

      course.map((chapter) => {
        chapter.parts.map((part) => console.log(part))
        return(
          <div>
          <h2 key={chapter.id}>{chapter.name}</h2>
          {chapter.parts.map((part) => <Part key={part.id} part={part} />)}
          <Total chapter={chapter}/>
          </div>
        )
      })}
    </div>
)
}

const Part = ({part}) => <div>{part.name} {part.exercises}</div>

const Total = ({chapter}) => {
  const total = chapter.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises ,0)
  return( 
    <div>
      <strong>total of {total} exercises</strong>
    </div>
  )
}

export default Course