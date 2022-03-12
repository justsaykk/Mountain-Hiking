import { useState } from "react";
import NavBar from "../components/NavBar";
import Card from "react-bootstrap/Card";
import eightPeaks from "../datasets/eightpeaks";

/////Code Below, Imports above/////
export default function Inspired() {
  const [userQuery, setUserQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (userQuery === "") return;
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info&list=search&utf8=1&inprop=url&srsearch=${userQuery}&srlimit=5`;

    const res = await fetch(url);
    if (!res.ok) {
      throw Error("Error");
    }
    const json = await res.json();
    setResults(json.query.search);
  };

  return (
    <div>
      <NavBar />
      <div className="cardWrapper">
        {eightPeaks.map((el) => {
          return (
            <a
              style={{ textDecoration: "none", color: "black", width: "auto" }}
              href={el.infoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={el.imageUrl}
                  style={{ width: "268px", height: "180px" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "700", maxWidth: "268px" }}>
                    {el.name}
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Continent: {el.continent} <br />
                      Height: {el.height} meters
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          );
        })}
      </div>
      <div>
        <div className="search">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Want to know more about mountains?"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="results">
          {results.map((el, i) => {
            const aTag = `https://en.wikipedia.org/?curid=${el.pageid}`;
            return (
              <div className="result" key={i}>
                <h3>{el.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: el.snippet }}></p>
                <a href={aTag} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
