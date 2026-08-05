import { useState } from "react";
import notepadBg from "./assets/images/notepad-bg.png";

const App = () => {
  // ------------two-way-binding----------

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  // ----------for-mapping-both-in-array------

  const [task, setTask] = useState([])

  // -------------onSubmit-handler--------

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(details);

    const copyTask = [...task];

    copyTask.push({title,details})
    setTask(copyTask);
    console.log(copyTask)
    
    setTitle('')
    setDetails('')
  };

   // -------------onSubmit-handler--------

const deleteNote=(idx)=>{

  const copyTask =  [...task];
  // console.log(copyTask[idx])
  copyTask.splice(idx,1)
  setTask(copyTask)
}

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 items-start lg:w-1/2 flex-col p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* FIRST INPUT FOR HEADING */}

        <input
          className="px-5 py-2 w-full border-2 outline-none rounded font-medium"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        {/* DETAILED INPUT */}

        <textarea
          className="px-5 py-2 w-full h-32 border-2 outline-none rounded font-medium"
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className="bg-white active:bg-gray-300 font-medium w-full text-black outline-none px-5 py-2 rounded">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 overflow-auto bg-gray-900 h-screen p-10">
        <h2 className="text-4xl font-bold">Recent Notes</h2>
        <div className="flex flex-wrap mt-5 gap-5 h-full">
            {task.map(function(elem,idx){
              return <div style={{backgroundImage:`url(${notepadBg})`}} key={idx} className="h-50 w-40 pt-6 pb-4 px-6 bg-cover bg-center bg-no-repeat relative flex justify-between flex-col items-start rounded-2xl bg-white text-black">
                      <div>
                      <h3 className="leading-tight text-xl font-bold">{elem.title}</h3> 
                      <p className="mt-2 leading-tight text-sm font-semibold text-gray-600">{elem.details}</p>
                      </div>
                      <button onClick={()=>{
                        deleteNote(idx)
                      }} className="w-full py-1 text-xs rounded font-bold cursor-pointer active:scale-95 bg-red-500 text-white">Delete</button>
              </div>
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
