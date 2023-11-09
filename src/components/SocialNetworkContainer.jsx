import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { linkedin: "linkedin", linkedin: <FaLinkedinIn /> },
  
];

const socialNetwork = [
  { git: "github", git: <FaGithub /> },
]

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="https://www.linkedin.com/in/matheus-batista-434565268/" className="social-btn" id={network.linkedin} key={network.linkedin}>
          {network.linkedin}
        </a>
      ))}
      {socialNetwork.map((network) => (
        <a href="https://github.com/matheusbc-dev" className="social-btn" id={network.git} key={network.git}>
          {network.git}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
