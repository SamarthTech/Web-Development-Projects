import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const AllShows = () => {
  const [showInfo, setShowInfo] = useState();
  useEffect(() => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    fetch(url)
      .then((res) =>
        res
          .json()
          .then((result) => setShowInfo(result))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));
    console.log(showInfo);
  }, []);
  return (
    <>
      {/* <div className='showCard'  style={{backgroundImage :  "url(https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg)" ,}}> */}

      {/* </div> */}
      <div className="allshows">
        {showInfo
          ? showInfo?.map((item) => {
              return (
                <div
                  className="showCard"
                  style={{ backgroundColor: "blue", width: "300px" }}
                >
                  <Link href="">
                    <img
                      width="300px"
                      src={item.show.image?.original || "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"}
                      alt=""
                    />
                  </Link>
                  <footer className="footer">
                    <h2 className="title">{item.show?.name}</h2>
                    <div className="network">{item.show.network?.name}</div>
                    <br />
                    <Button buttonName="View Summary"  link ={`/${item.show?.id}`}/>
                  </footer>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </>
  );
};

export default AllShows;
