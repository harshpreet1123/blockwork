import { useState } from "react";
import create_job from "../../assets/svg/create_job.svg";

function CreateJob() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleUpload = () => {
    console.log(selectedFiles);
  };

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mt-24 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Create Job
          </h2>
          <div className="dark:text-gray-600">
            Want something done, fill up details and create a job.
          </div>
          <img src={create_job} className="h-96"/>
        </div>
      </div>
      <form noValidate="" className="space-y-6">
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
          <input
            className="pl-2 outline-none border-none w-full dark:bg-gray-100"
            type="text"
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <textarea
            className="pl-2 outline-none border-none w-full dark:bg-gray-100"
            name="Jobdescription"
            placeholder="Job Description"
            rows="2"
            cols="60"
          />
        </div>
        <div className="flex">
          <div className="flex w-1/2 items-center border-2 py-1 px-3 rounded-2xl mb-1 mr-1">
            <input
              className="pl-2 outline-none border-none w-full dark:bg-gray-100"
              type="number"
              name="budget"
              placeholder="Budget"
            />
          </div>
          <div className="flex w-1/2 items-center border-2 py-2 px-3 rounded-2xl mb-1 ml-1">
            <input
              className="pl-2 outline-none border-none dark:bg-gray-100"
              type="text"
              name="time"
              placeholder="Time"
            />
          </div>
        </div>
        <div className="flex items-center border-2 py-3 px-3 rounded-2xl mb-4">
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} className="border-2 rounded-lg p-2">
            Attach Files
          </button>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-purple-600 dark:text-gray-50"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}

export default CreateJob;
