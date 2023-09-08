import React, { useEffect, useState } from 'react';
import './projects.css';
import useWindowDimensions from '../../utils/useWindowDimensions';

const Projects = () => {
  const { height, width } = useWindowDimensions();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const calculateTranslation = () => `translateY(calc(10vh - ${scrollPosition}px))`;

  return (
    <div className="container">
      {/* <div className='Detail'>
      <h1 className='name'>Hii! I am Harsh</h1>
      </div> */}
      
      
      <div className="projects">
      
      {/* <h1 className="projectsTitle"  style={{
        // height: '50vh', // Set the element height to fill the viewport height
        // backgroundColor: 'lightblue', // Just to make it visually identifiable
        transform: calculateTranslation(), // Apply the dynamic translateY transformation
        // transition: 'transform 0.3s ease-out', // Add a smooth transition effect
      }}>
         Hii!! This Is Harsh Sharma
        </h1> */}
        {/* <h1 classname="name" style={{transform: `translateY(calc(10vh - ${scrollPosition}px))`,color:'white'}}> </h1> */}
        {/* <h1 className="projectsTitle" style={{ transform: `translateY(calc(5vh - ${scrollPosition}px))` }}>
          Hello,
        </h1> */}
        <h1 className="projectsTitle" style={{ transform: `translateY(calc(10vh - ${scrollPosition}px))` }}>
          Here are some of my projects
        </h1>
        {/* <h1 className='projectTitle2' style={{ transform: `translateY(calc(50vh - ${scrollPosition}px))` }}>Here are some of my projects </h1> */}

        <div className="project">
          <div className="phoneWrapper">
            <div className="phone" style={{ transform: `translateX(calc(0vh - ${scrollPosition}px))` }}>
              <img src={require('../../data/phone.png')} alt="" />
              <div className="phoneScreen">
                <img src={require('../../data/phoneurl.png')} alt="" className="phoneApp" />
              </div>
            </div>
          </div>
           {/* <div className="phoneWrapper">
            <div
              className={width > 650 ? 'laptop' : 'phone'}
              style={{ transform: `translateX(calc(0vh - ${scrollPosition}px))` }}
            >
              <img src={width > 650 ? require('../../data/laptop.png') : require('../../data/phone.png')} alt="" />
              <div className={width > 650 ? 'laptopScreen' : 'phoneScreen'}>
                <img src={require('../../data/urll.jpeg')} alt="" className={width > 650 ? 'laptopApp' : 'phoneApp'} />
              </div>
            </div>
          </div> */}
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">URL Shortner</h1>
              <p className="projectDesc">
                The "URL Shortener" project is a powerful tool designed to simplify and streamline the process of sharing web links.
               Created using React, this user-friendly application allows users to input long, cumbersome URLs and converts them into concise, easy-to-share links.
                Leveraging external APIs, it seamlessly shortens URLs with just a click, offering convenience and efficiency. Whether you're sharing articles, documents, 
                or any web content, this project enhances accessibility and simplifies the sharing process, making it a valuable addition to any web user's toolkit.
               With its user-friendly interface and the magic of URL shortening, this project showcases the power of React and demonstrates how technology can enhance everyday tasks.
                <br />
                <b>Tech Stack:</b> ReactJS
              </p>
              <a href="https://github.com/Harshsharma008/urlshortner" target="_blank" rel="noreferrer">
                <button className="projectButton">Learn More</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="phoneWrapper">
            <div
              className={width > 650 ? 'laptop' : 'phone'}
              style={{ transform: `translateX(calc(${scrollPosition}px - 160vh ))` }}
            >
              <img src={width > 650 ? require('../../data/laptop.png') : require('../../data/phone.png')} alt="" />
              <div className={width > 650 ? 'laptopScreen' : 'phoneScreen'}>
                <img src={require('../../data/streetfight.png')} alt="" className={width > 650 ? 'laptopApp' : 'phoneApp'} />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Street Fighter Game</h1>
              <p className="projectDesc">
              Embark on an epic journey into the thrilling world of Java Street Fighter 2D,
               a classic arcade-style brawler that redefines nostalgia with its captivating gameplay and implementation of object-oriented programming (OOP) concepts.
                Developed with Java, Swing framework, and OOP principles, this game promises to deliver an adrenaline-pumping experience reminiscent of the golden era of arcade gaming.

                <br />
                <b>Tech Stack:</b> Java , Swing framework, OOPS
              </p>
              <a href="https://github.com/Harshsharma008/StreetFighter2d" target="_blank" rel="noreferrer">
                <button className="projectButton">Learn More</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="phoneWrapper">
            <div className="phone" style={{ transform: `translateX(calc(255vh - ${scrollPosition}px))` }}>
              <img src={require('../../data/phone.png')} alt="" />
              <div className="phoneScreen">
                <img src={require('../../data/chwt.png')} alt="" className="phoneApp" />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Chat App</h1>
              <p className="projectDesc">
              The chat application, meticulously crafted using React and Firebase, offers users a seamless and engaging platform to connect and communicate effortlessly.
               With its intuitive user interface and real-time messaging capabilities powered by Firebase's real-time database, users can engage in dynamic conversations without any delays, witnessing their messages instantly appear on the screen. The React-based frontend ensures a responsive and interactive chat experience, allowing users to send and receive messages efficiently across various devices.
               Thanks to Firebase's robust authentication and security features, users can chat with confidence, knowing their conversations are private and secure. Whether it's one-on-one conversations or group chats, this React and Firebase-based chat application provides a dynamic and enjoyable environment for users to stay connected and share moments with friends, family, or colleagues in real-time.
                <br /> <b>Tech Stack:</b> React, Styled-components, FireBase.
              </p>
              <a href="https://harsh-connection.netlify.app/" target="_blank" rel="noreferrer">
                <button className="projectButton">Learn More</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="phoneWrapper">
            <div
              className={width > 650 ? 'laptop' : 'phone'}
              style={{ transform: `translateX(calc(${scrollPosition}px - 350vh ))` }}
            >
              <img src={width > 650 ? require('../../data/laptop.png') : require('../../data/phone.png')} alt="" />
              <div className={width > 650 ? 'laptopScreen' : 'phoneScreen'}>
                <img src={require('../../data/restaurant.jpeg')} alt="" className={width > 650 ? 'laptopApp' : 'phoneApp'} />
              </div>
            </div>
          </div>
          <div className="detailWrapper">
            <div className="projectDetail">
              <h1 className="projectTitle">Hotel Website </h1>
              <p className="projectDesc">
              
Welcome to our elegant hotel website, where we invite you to explore our exquisite dining offerings through a seamless fusion of HTML, CSS, and JavaScript technologies.
 Our website boasts a cutting-edge design that ensures a fully responsive experience, adapting effortlessly to various devices and screen sizes. With the power of HTML, we've structured our menu presentation for easy navigation, allowing you to delve into culinary delights with just a click. CSS comes into play, enhancing the visuals with stylish elements that capture the essence of our delectable dishes.
 Through the magic of JavaScript, our menu becomes an interactive journey, letting you filter options, view dish details, and even place orders directly from the comfort of your screen. Whether you're browsing on your desktop, tablet, or smartphone, our website guarantees a smooth and visually appealing encounter.
                <br />
                <b>Tech Stack:</b> HTML, CSS, Javascript
              </p>
              <a href="https://github.com/Harshsharma008/frontendWeb" target="_blank" rel="noreferrer">
                <button className="projectButton">Learn More</button>
              </a>
            </div>
          </div>
        </div>
        

        
      </div>
    </div>

  );
};

export default Projects;
