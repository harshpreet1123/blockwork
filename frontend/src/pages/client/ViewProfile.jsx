import React from "react";

const ViewProfile = () => {
  const [userData, setUserData] = useState(second);
  useEffect(() => {
    const fetchUserData = async (token) => {
      console.log("token:" + token);
      const response = await ApiService.getProfleDetails(token);

      if (response.data) {
        setUserData(response.data);
      }
    };

    fetchUserData(token);
  }, []);
  return <div>{userData}</div>;
};

export default ViewProfile;
