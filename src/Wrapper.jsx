import { createContext, useState } from "react"

export const TaskContext = createContext();

const Wrapper = (props) => {
  const [todos, settodos] = useState([
    {id: 1, title: "first task", details: "solve one problem daily"}
  ])

  return (
    <>
        <TaskContext.Provider value={[todos, settodos]}>
            {props.children}
        </TaskContext.Provider>
    </>
  )
}

export default Wrapper