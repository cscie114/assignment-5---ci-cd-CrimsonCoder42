import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import '../styles/page.css';

const IndexPage = ({ data }) => {
  const [selectedState, setSelectedState] = useState('');
  const [parks, setParks] = useState([]);

  console.log('data in IndexPage', data);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };


  return (
      <>
        <Layout>
          <div className="container">
            <ul className="image-grid">
              <li>
                <Link to="/movies/tt2911666">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg" alt="Image 1" />
                </Link>
              </li>
              <li>
                <Link to="/movies/tt4425200">
                  <img src="https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg" alt="Image 2" />
                </Link>
              </li>
              <li>
                <Link to="/movies/tt6146586">
                  <img src="https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg" alt="Image 3" />
                </Link>
              </li>
              <li>
                <Link to="/movies/tt10366206">
                  <img src="https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg" alt="Image 4" />
                </Link>
              </li>
            </ul>
          </div>
        </Layout>
      </>
  );
};

export default IndexPage;
