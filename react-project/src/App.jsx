import { useState, useReducer, useEffect } from "react";
import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Blog</h1>
      <p>Copy {year}</p>
    </header>
  );
}

const blogList = [
  "The Line of Control (LoC) is the military boundary dividing Indian and Pakistani-controlled parts of Jammu and Kashmir.",
  "It was established after the 1971 war and formalized in the 1972 Simla Agreement.",
  "The LoC is a tense and heavily militarized zone, often witnessing cross-border firing and infiltration.",
];

const blogObjects = blogList.map((blog, i) => ({
  id: i,
  title: blog,
}));

function Main({ blogs, availableStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be available</button>
        <h2>Behind Borders {availableStatus ? "available" : "unavailable"}</h2>
      </div>
      <main>
        <img
          src="https://img.theweek.in/content/dam/week/news/india/images/2020/4/12/army-loc-jammu-pti.jpg"
          height={200}
          alt="Image of Loc India"
        />
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} style={{ listStyleType: "none" }}>
              {blog.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The blog is ${status ? "available" : "unavailable"}`);
  }, [status]);

  return (
    <div>
      <h1>
        The blog you're trying to access is{" "}
        {status ? "available" : "unavailable"}
      </h1>
      <button onClick={toggle}>
        {" "}
        {status ? "unavailable" : "available"} blog
      </button>
      <Header name="Asish" year={new Date().getFullYear()} />
      <Main blogs={blogObjects} availableStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;
