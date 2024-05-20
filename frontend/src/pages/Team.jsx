import Navbar from "../components/Navbar";

const Team = () => {
  return (
    <div>
      <Navbar/>
      <section className="py-6 ">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl text-purple-700">
            Team
          </h1>
          <p className="max-w-2xl text-center ">
          We are a dynamic duo of developers working together to build <strong className="text-purple-700">BlocWork</strong> - A Blockchain Based Freelancing Platform. Harshpreet Singh, a skilled full-stack developer, is handling all the backend development tasks, ensuring a robust and secure foundation for the platform. Karan Kumar, a talented frontend developer, is focusing on UI design and frontend development, creating an intuitive and visually appealing user experience. Together, we combine our expertise to bring <strong className="text-purple-700">BlocWork</strong> to life, offering a seamless and innovative solution for freelancers and clients.
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover border-2 border-purple-700 rounded-full "
                src="https://www.svgrepo.com/show/446487/avatar.svg"
              />
              <p className="text-xl font-semibold leading-tight">
                Harshpreet Singh
              </p>
              <p className=" ">FullStack Developer</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full border-2 border-purple-700 "
                src="https://www.svgrepo.com/show/446481/avatar-portrait.svg"
              />
              <p className="text-xl font-semibold leading-tight">
                Karan Kumar
              </p>
              <p className=" ">Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
