import React from "react";

const Card = (props) => (
  <div className=" pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
    {props.profiles.map((profile) => (
      <div id={profile.id} className="p-2 md:p-5 pt-4">
        <div className="flex justify-evenly ">
          {" "}
          <button
            className="focus:outline-none"
            onClick={() => (
              // eslint-disable-next-line no-sequences
              (document.getElementById(profile.id).className = "hidden"),
              (document.getElementById(profile.id).id = "")
            )}
          >
            <i className="las la-trash-alt top-56 shadow-2xl flex justify-center items-center text-2xl w-6 h-6  rounded-full mx-1 focus:outline-none"></i>
          </button>
          <button
            className="focus:outline-none"
            onClick={() => (
              // eslint-disable-next-line no-sequences
              (document.getElementById("star-" + profile.id).className =
                // eslint-disable-next-line no-sequences
                "las la-star top-56 shadow-2xl flex justify-center items-center text-2xl w-6 h-6 text-yellow-300 mx-1 focus:outline-none"),
              (document.getElementById(profile.id).className =
                "p-5 pt-4 rounded-lg shadow-inner bg-yellow-100 bg-opacity-25")
            )}
          >
            <i
              id={"star-" + profile.id}
              className="las la-star top-56 shadow-2xl flex justify-center items-center text-2xl w-6 h-6  mx-1 focus:outline-none"
            ></i>
          </button>
        </div>
        <div className="rounded-lg overflow-hidden bg-white shadow-2xl max-w-xs m-2">
          <img
            src={"https://picsum.photos/300/?blur=10?random=" + profile.id}
            className="object-cover h-32 w-full"
            alt=""
          />
          <div className="flex  justify-center -mt-8">
            <img
              src={profile.avatar_url}
              className="rounded-full bg-white border-solid border-white border-2 w-24 -mt-3"
              alt=""
            />
          </div>
          <div className="text-center px-3 pb-6 pt-2">
            <h3 className="text-black text-sm font-bold font-sans">
              {profile.name}
            </h3>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              <h3 className="text-black text-sm font-sans">@{profile.login}</h3>
            </a>
            <p className="mt-2 font-sans font-light text-grey-dark">
              {profile.bio}
            </p>
          </div>
          <div className="flex justify-center text-sm px-3 md:px-0 pb-5 text-grey-dark">
            <div className="text-center mr-3 border-r pr-3">
              <h4>{profile.following}</h4>
              <span>following</span>
            </div>
            <div className="text-center mr-3 border-r pr-3">
              <h4>{profile.public_repos}</h4>
              <span>public repos</span>
            </div>
            <div className="text-center">
              <h4>{profile.followers}</h4>
              <span>followers</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Card;
