import React from "react"

enum Colors {
    red,
    blue,
    green,
    noMother
}

interface IAnimal {
    povadki: string
    color: Colors
}

interface IStupidStudent extends IAnimal{
    iq: number
    name: string | number
    tasks: number
    canBeNotStupid: boolean
    lessons?: number
    hasMom: boolean
}

function App() {

    const stupidStudent: IStupidStudent = {
        iq: -12,
        name: "evgeny",
        tasks: 999,
        canBeNotStupid: false,
        hasMom: false,
        povadki: "еврей",
        color: Colors.red
    }

    const stupidStudents: IStupidStudent[] = [stupidStudent, stupidStudent, stupidStudent]


    console.log(stupidStudents)

  return (
    <div className={""}>
      Hello world
    </div>
  )
}

export default App
