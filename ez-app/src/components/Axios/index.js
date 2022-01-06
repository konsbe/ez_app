import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";

const Axios = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");
  const [userImg, setUserImg] = useState("");
  const [array, setArray] = useState([{}]);
  const [obj, setobj] = useState({ name: user, picture: userImg });

  const fetchData = async () => {
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        console.log(res.data.results[0].picture.thumbnail);
        console.log(res.data.results);
        setUser(JSON.stringify(res.data.results[0].name.first));
        setUserImg(res.data.results[0].picture.medium);
        setobj({
          name: user,
          picture: userImg,
        });
        setArray([...array, obj]);
        console.log(user);
        console.log(obj);
        console.log(array);
        // return JSON.stringify(res);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //   const handleFetchUser = async () => {

  //     });
  //   };

  return (
    <div>
      Test {count}
      <div>
        <button onClick={handleClick}>Plus 1</button>
      </div>
      <div>
        <button onClick={fetchData}>FetchUser</button>
      </div>
      {/* {!user && <div>no user</div>} */}
      <div className="userData">
        {user} <img src={userImg} />
      </div>
      <div>
        {array.map((person) => {
          return (
            <p>
              {person.name} <img src={person.picture} />
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Axios;
