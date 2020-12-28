const { useState, useEffect } = wp.element;
import axios from "axios";

function MyComponent({ attributes, changeAuthorAttributes }) {
  // const [fakeTitle, setFakeTitle] = useState("");

  // const getFakeData = () => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/todos/2`)
  //     .then((res) => {
  //       setFakeTitle(res.data.title);
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  // useEffect(() => {
  //   getFakeData();
  // }, []);

  return (
    <div>
      <input
        type="text"
        value={attributes.author}
        onChange={changeAuthorAttributes}
      />
    </div>
  );
}

export default MyComponent;
