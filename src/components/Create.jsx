import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../Wrapper";

const Create = () => {
  const [todos, settodos] = useContext(TaskContext);

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
  
    // const [task, setTask] = useState([]);
  
    const submitHandler = (e) => {
      e.preventDefault();

      if (title.trim() === "" || details.trim() === "") {
        alert("Write something first! ⚠️");
        return;
      }
      
      const newtodos = {
        id: nanoid(),
        title: title,
        details: details,
      }
  
    //   const copytodos = [...todos];
    //   copytodos.push(newtodos);
    //   settodos(copytodos);

        const copytodos = [...todos, newtodos];
        settodos(copytodos);

        toast.success("Task added!")
  
      setTitle('');
      setDetails('');
    };

  return (
    <>
        <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 flex-col gap-4 items-start p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* pehla input */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-4 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        //   required
        />

        {/* Doosra input */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="flex flex-row items-start px-5 py-2 w-full h-50 border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        //   required
        />

        <button className="bg-white active:scale-98 w-full text-black px-5 py-2 rounded">
          Add Notes
        </button>
      </form>
    </>
  )
}

export default Create