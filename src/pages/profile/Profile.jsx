import React from 'react';
import FindMeGithub from '../../components/findMeGithub/FindMeGithub';
import NavBar from '../../components/navBar/NavBar';
import Projects from '../../components/projects/Projects';
// import Details from '../../components/details/Details';


const Profile = ({ displayProfile }) => {
  return (
    <div
      style={{
        display: displayProfile,
        flexDirection: 'column'
      }}
    >
      <NavBar />
       <Projects />
      <FindMeGithub /> 
    </div>
  );
};

export default Profile;
