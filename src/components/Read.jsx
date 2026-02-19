import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { TaskContext } from '../Wrapper';

const Read = () => {
  const [todos, settodos] = useContext(TaskContext);

    const deleteNote = (id)=>{
        const filtertodo = todos.filter((todo) => todo.id != id);
        settodos(filtertodo);

        toast.error("Task removed!")
    }

    const deleteAll = ()=>{
        // const filtertodo = todos.filter((todo) => todo.id != id);
        settodos([]);

        toast.error("All tasks removed!")
    }

    const rendertodos = (todos || []).map(function (todo) {
        return (
          <div
            key={todo.id}
            className="flex justify-between flex-col items-start relative h-52 w-36 lg:w-39 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
          >
            <div className="overflow-hidden w-full">
              <h3 className="leading-tight text-xl font-bold break-words">
                {todo.title}
              </h3>
              <p className="mt-3 leading-tight font-medium text-gray-500 break-words">
                {todo.details}
              </p>
            </div>
            <button onClick={() => deleteNote(todo.id)} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
          </div>
        );
      });

  return (
    <>
        <div className="lg:w-1/2 border-t-1 lg:border-l-1 p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <button onClick={deleteAll} className="text-sm font-bold mr-4 text-red-700 cursor-pointer">Clear all</button>
      </div>
        <div id="scroll-container" className="flex flex-wrap justify-start items-start gap-10 lg:gap-5 mt-6 lg:h-[90%] overflow-auto">
          {rendertodos}
        </div>
      </div>
    </>
  )
}

export default Read