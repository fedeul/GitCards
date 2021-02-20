import React from "react";

const CardGlass = (props) => (
  <section>
    {props.profiles.map((profile) => (
      <div className="card z-0">
        <div id="back" className="face back mt-7">
          <div className="text-center text-white font-bold italic text-xl flex place-items-center p-3 back mt-7">
            <p className="p-4">
              <i class="las mr-3 align-top la-quote-left"></i>
              {profile.bio}
              <i class="las  ml-3 align-top la-quote-right"></i>
            </p>
          </div>
          <div className="text-white italic text-sm mx-auto text-center  pt-3">
            <a
              href={"https://twitter.com/" + profile.twitter_username}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="">
                <i className="lab text-sm mr-2 align-middle text-blue-400 la-twitter"></i>
                {profile.twitter_username}
              </h3>
            </a>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              <h3 className="mt-2">
                <i className="lab text-sm mr-2 align-middle text-black la-github"></i>
                <i className="las text-sm  align-middle text-white la-at"></i>
                {profile.login}
              </h3>
            </a>
          </div>
        </div>

        <div id="front" className="face front flex-col  text-center  mt-7">
          <div className="flex justify-center mt-8">
            <img
              id="imgUser"
              className="rounded-full w-24"
              src={profile.avatar_url}
              alt="User avatar"
            />
          </div>
          <div className="pl-6">
            <i
              id="bio"
              class="z-40 float-right animate-pulse text-gray-300 pr-2 las la-long-arrow-alt-right"
            ></i>
            <h3 className="font-bold">{profile.name}</h3>

            <h3 className="-ml-8 mb-8">
              <a href={profile.html_url} target="_blank" rel="noreferrer">
                <i class="las la-at"></i>
                {profile.login}
              </a>
            </h3>
          </div>
          <div className="flex place-items-center divide-x-2 justify-between text-center text-white bg-gray-50 bg-opacity-20 shadow-inner text-sm font-sans rounded-xl p-3 mt-3 mx-4">
            <div className="flex divide-x-2 place-items-center uppercase mx-auto">
              <h3 className="">
                <p className="text-xs">public repos</p>
                {profile.public_repos}
              </h3>
              <h3 className="ml-2">
                <p className="ml-2 text-xs">followers</p>
                {profile.followers}
              </h3>
              <h3 className="mx-2">
                <p className="mx-2 text-xs">following</p>
                {profile.following}
              </h3>
            </div>
            <div className="text-left pl-3">
              <h3 className="">
                <i className="las text-sm text-no-wrap mr-2 align-middle text-gray-700 la-laptop-code"></i>
                {profile.company}
              </h3>
              <a
                href={"https://www.google.com/maps/place/" + profile.location}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="truncate">
                  <i className="las text-lg mr-2 align-middle text-red-500 la-map-marker-alt"></i>
                  {profile.location}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default CardGlass;
