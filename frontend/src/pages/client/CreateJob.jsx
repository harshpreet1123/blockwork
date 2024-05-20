import { useState } from "react";
import create_job from "../../assets/svg/create_job.svg";
import ApiService from "../../services/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function CreateJob() {
  // const [selectedFiles, setSelectedFiles] = useState([]);

  // const handleFileChange = (event) => {
  //   const filesArray = Array.from(event.target.files);
  //   setSelectedFiles([...selectedFiles, ...filesArray]);
  // };
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [time, setTime] = useState("");
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const handleRemoveTag = (index) => {
    const newList = [...tagList];
    newList.splice(index, 1);
    setTagList(newList);
  };
  const handleCreateJob = async () => {
    const response = await ApiService.createJob(
      token,
      title,
      description,
      [],
      tagList,
      budget,
      time
    );
    if (response) {
      navigate("/cl/home");
    }
  };

  // const handleTagChange = (e) => {
  //   setTag(e.target.value);
  // };

  // const handleTagKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     setTagList([...tagList, tag]);
  //     setTag("");
  //   }
  //   console.log(tagList);
  // };

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
          <img src={create_job} className="h-96" />
        </div>
      </div>
      <div noValidate="" className="space-y-6">
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ">
          <input
            className="pl-2 outline-none border-none w-full dark:bg-gray-100"
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <textarea
            className="pl-2 outline-none border-none w-full dark:bg-gray-100"
            name="Jobdescription"
            placeholder="Job Description"
            rows="2"
            cols="60"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="flex">
          <div className="flex w-1/2 items-center border-2 py-1 px-3 rounded-2xl mb-1 mr-1">
            <input
              className="pl-2 outline-none border-none w-full dark:bg-gray-100"
              type="number"
              name="budget"
              placeholder="Budget"
              onChange={(e) => {
                setBudget(e.target.value);
              }}
            />
          </div>
          <div className="flex w-1/2 items-center border-2 py-2 px-3 rounded-2xl mb-1 ml-1">
            <input
              className="pl-2 outline-none border-none dark:bg-gray-100"
              type="text"
              name="time"
              placeholder="Time in days"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Tags"
              value={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // Prevent default form submission behavior
                  if (tag.trim() !== "") {
                    setTagList([...tagList, tag.trim()]); // Trim tag before adding
                    setTag(""); // Clear tag input
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="pb-4 flex">
          {tagList.map((str, index) => (
            <div key={index} className="rounded border border-solid mr-3">
              <span className="bg-slate-200 p-2">{str}</span>
              <span
                className="bg-red-300 p-2 hover:bg-red-400"
                onClick={() => handleRemoveTag(index)}
              >
                x
              </span>
            </div>
          ))}
        </div>
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Upload file
          </label>
          <input
            className="items-center border-2 py-3 px-3 rounded-2xl mb-4 block w-full text-sm text-gray-900 border-gray-300 cursor-pointer bg-gray-50  focus:outline-none"
            multiple
            type="file"
          />
        </div>
        <button
          type="submit"
          onClick={handleCreateJob}
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-purple-600 dark:text-gray-50"
        >
          Create Job
        </button>
      </div>
    </div>
  );
}

export default CreateJob;
