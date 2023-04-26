import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import '../styles/page.css';

const IndexPage = () => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if(triggered) {
      fetch("/.netlify/functions/weatherapi?latitude=39.7456&longitude=-97.0892", {
        method: "GET",
      })
          .then((result) => {
            return result.json()
          })
          .then(json => {
            console.log(json.data)
            alert(JSON.stringify((json.data)));
            setTriggered(false)
          })
          .catch((error) => alert(error));
    }
  }, [triggered])

  return (
      <>
        <Layout>
          <button onClick={() => {
            setTriggered(!triggered)}
          }>Click Me For the Weather in SF</button>
          <div className="container">
            <ul className="image-grid">
              <li>
                <Link to="/movies/tt2911666">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg" alt="John Wick" />
                </Link>
              </li>
              <li>
                <Link to="/movies/tt4425200">
                  <img src="https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg" alt="John Wick: Chapter 2" />
                </Link>
              </li>
              <li>
                <Link to="/movies/tt6146586">
                  <img src="https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg" alt="John Wick: Chapter 3 - Parabellum" />
                </Link>
              </li>
              <li>
                <Link to="/movies/tt10366206">
                  <img src="https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg" alt="John Wick: Chapter 4" />
                </Link>
              </li>
            </ul>
          </div>
        </Layout>
      </>
  );
};

export default IndexPage;

