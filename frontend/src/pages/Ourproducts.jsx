function Ourproducts() {
  return (
    <div>   
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
            <p className="text-black font-bold text-3xl  text-center">Our Products</p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-5 mb-5 rounded-2xl "></div>
        </div>
        <div className="w-[90%] h-auto flex flex-wrap justify-around ">
            <div className="w-64  h-auto flex flex-col items-center mb-12 mt-3 border-black border-2 rounded-xl p-2">
                <img src="https://cdn-icons-png.flaticon.com/128/2387/2387545.png" alt="" />
                <p className="text-2xl font-bold text-black  mt-4 mb-2">BlocWork</p>
                <p className="text-xl font-bold text-gray-800 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, animi.</p>
            </div>
            <div className="w-64  h-auto flex flex-col items-center mb-12 mt-3 border-black border-2 rounded-xl p-2">
                <img src="https://cdn-icons-png.flaticon.com/128/4154/4154631.png" alt="" />
                <p className="text-2xl font-bold text-black mt-4 mb-2">Job Portal</p>
                <p className="text-xl font-bold text-gray-800 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, animi.</p>
            </div>
            <div className="w-64  h-auto flex flex-col items-center mb-12 mt-3 border-black border-2 rounded-xl p-2">
                <img src="https://cdn-icons-png.flaticon.com/128/5025/5025003.png" alt=""/>
                <p className="text-2xl font-bold text-black mt-4 mb-2">Freelancer portal</p>
                <p className="text-xl font-bold text-gray-800 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, animi.</p>
            </div>
            <div className="w-64  h-auto flex flex-col items-center mb-12 mt-3 border-black border-2 rounded-xl p-2">
                <img src="https://cdn-icons-png.flaticon.com/128/1414/1414324.png" alt="" />
                <p className="text-2xl font-bold text-black mt-4 mb-2">Popularity</p>
                <p className="text-xl font-bold text-gray-800 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, animi.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Ourproducts
