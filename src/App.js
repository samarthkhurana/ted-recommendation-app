import React, { useState } from "react";
import "./styles.css";

var recommDict = {
  Technology: [
    {
      Name: "Build Back Better",
      Desc:
        " \nBuild Back Better features thought leaders and change agents evaluating our pre-pandemic systems and practices in an effort to create a more sustainable, efficient and just world.",
      img:
        "https://pi.tedcdn.com/r/pl.tedcdn.com/build_back_better/hero_lg.png?w=1600",
      link: "https://www.ted.com/series/build_back_better"
    },
    {
      Name: "Space Technology",
      Desc:
        "Sure, we're looking beyond the planet to other worlds we may one day inhabit — but a lot of this technology we've developed can be used for the good of the Earth, too.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_625/c667ca30-48d2-4225-bfcd-32f0962fb987/space_tech_for_earth_FB.jpg?quality=89&w=1200",
      link:
        "https://www.ted.com/playlists/625/how_space_technology_can_change_life_on_earth"
    },

    {
      Name: "Designing for disability",
      Desc:
        "Good design — and smart technology — should fuel inclusivity. These talks show how tech and design can empower.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_372/designing_for_disability_1200x627.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/372/designing_for_disability"
    }
  ],

  Science: [
    {
      Name: "Bizarre Science",
      Desc:
        "Take a walk on the stranger side of science with these uncanny, yet fascinating talks.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_358/Bizarre_science_1200x627.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/358/bizarre_science"
    },

    {
      Name: "Spark science curiosity",
      Desc:
        "Ready to ignite a surge of curiosity at home? Discover an entire world of science around you with these fun, engaging talks.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_777/205794e6-d38f-48e6-a23a-61cd69f80710/sciencecuriosityathome-1200x627.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/777/spark_science_curiosity_at_home"
    },

    {
      Name: "Sleeping with science",
      Desc:
        "Sleep — we spend one-third of our lives doing it, but what exactly do we get out of it? And how can we do it better? In this new TED series, sleep scientist Matt Walker uncovers the facts and secrets behind our nightly slumber. Tune in weekly for better zzz's! (Made possible with the support of Beautyrest)",
      img:
        "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/95abc865-17fe-4a98-82d7-92e75b1df90c/UPDATE_08_TED_SWS_TED.com_banner_1600x480.jpg?",
      link: "https://www.ted.com/series/sleeping_with_science"
    }
  ],

  Design: [
    {
      Name: "Sustainability by design",
      Desc:
        "Humans are builders and creators—but how can we build thoughtfully, without waste? These talks explore sustainable design—both past and present—and its beautiful, inspiring results.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_28/6f29c910-7dba-44ac-ae51-c17534fa295a/sustainability_by_design_1200x627.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/28/sustainability_by_design"
    },

    {
      Name: "Legends of the design world",
      Desc:
        "Some of history's greatest designers share intriguing perspectives and vignettes from their prolific journeys.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_127/6459afd3-4c02-41c4-8d97-1417ab709d38/design_legend_FB.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/127/design_giants"
    },

    {
      Name: "Justice by (re)design",
      Desc:
        "Necessary rethinks and ambitious yet achievable solutions for redesigning systems to work for all people, not just some.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_762/17577913-a788-4a44-b441-73dd918dea26/justice_by_redesign-1200x627.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/762/justice_by_re_design"
    }
  ],

  Business: [
    {
      Name: "Interview with a business mogul",
      Desc:
        "Gain insights, wisdom and advice from visionaries at the top of their fields and industries.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_696/69493214-4cd5-4423-af92-a8c3f3dea9bd/business_mogul_FB.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/696/interview_with_a_business_mogul"
    },

    {
      Name: "What makes businesses work?",
      Desc: "Insightful talks on what it takes to run a successful business.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_298/what_makes_businesses_work_1200x627.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/298/what_makes_businesses_work"
    },
    {
      Name: "Talks for when you want to start a business",
      Desc:
        "Ever dreamed of starting your own business? These talks can help get your idea off the ground.",
      img:
        "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_350/start_a_business_1200x627.jpg?quality=89&w=1200",
      link: "https://www.ted.com/playlists/350/talks_for_when_you_want_to_sta"
    }
  ]
};

var listElements = Object.keys(recommDict);

export default function App() {
  // var [result, setresult] = useState("");
  var [Name, setName] = useState("Science");

  // function listcall(event) {
  //   var userInput = event.target.value;
  //   var result = recommDict[userInput];

  //   // console.log(resultt);
  //   setresult(result);
  // }

  function buttonClick(items) {
    Name = items;
    setName(Name);
  }

  return (
    <div className="App">
      <h1 className="heading">
        <img
          style={{ maxWidth: "100px", borderRadius: "100px" }}
          src="https://pi.tedcdn.com/r/pl.tedcdn.com/social/ted-logo-fb.png?v=wAff13s?"
        ></img>
        <br />
        TED Recommends
      </h1>

      {/* <input onChange={listcall} />

      <h3> {result} </h3> */}
      <br />
      {listElements.map((items) => {
        return (
          <button className="btn" onClick={() => buttonClick(items)}>
            {items}
          </button>
        );
      })}

      {recommDict[Name].map((data) => {
        return (
          <span className="ul">
            {/* <li> */}
            <div>
              <hr />
              <br />
              <span className="name">{data.Name}</span>
            </div>
            <br />
            <img className="image" src={data.img}></img>
            <br />
            <span className="desc">Description</span> <br />
            <br />
            <div className="description">{data.Desc}</div>
            <br />
            <a
              className="link"
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              Link to the playlist
            </a>
            <br />
            <br />
            {/* </li><br/> */}
          </span>
        );
      })}
    </div>
  );
}
