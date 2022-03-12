import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="about-section">
        <h1>The Team</h1>
        <div className="introduction">
          <p>
            We are a team of mountaineers that wishes to spread the adventurous
            spirit to more people. We offer expeditions to various peaks for an
            affordable price. (partly because we're as excited as you!) <br />
            <br />
            Our team comprises of several Sherpas that have traversed the routes
            thousands of times. They grew up in the mountains and now, they're
            working in the mountains. <br />
            <br />
            You could head on over to the itineraries page to find out more
            about our expedition packages OR you could learn more about
            mountains at the Get Inspired page! We're excited to see you soon!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="about-card">
            <img
              src="https://static.toiimg.com/photo/77409114.cms"
              alt="Phuri"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Sherpa Phuri</h2>
              <p className="title">Expedition Lead</p>
              <p>
                Sherpa Phuri is an accomplished mountaineer. Having summited Mt.
                Everest at least 5 times in the last 7 years. <br />
                He brings along with him, a wealth of experience and is a
                reliable guide for your adventure.
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className="column">
          <div className="about-card">
            <img
              src="http://img2.chinadaily.com.cn/images/201907/06/5d202364a310589501916878.jpeg"
              alt="Luhki"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Sherpa Luhki</h2>
              <p className="title">Expedition Assistant</p>
              <p>
                Sherpa Luhki is the newest addition to this team. He has been
                working as a porter for both trekking expeditions and
                mountineering expeditions. <br />
                He has summitted several peaks including a technically
                challenging Ama Dablam.
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className="column">
          <div className="about-card">
            <img
              src="https://www.actual-adventure.com/blog/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-09-at-12.33.09-PM.jpeg"
              alt="Pema"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Sherpa Pema</h2>
              <p className="title">Expedition Assistant</p>
              <p>
                Pema specializes in hiking trails around the Sagarmatha National
                Park. He also undertakes peaks of less that 7000m during his
                free time. <br />
                He is a solid chap that knows his way around the mountains.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
