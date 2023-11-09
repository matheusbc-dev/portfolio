import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(85)99678-6759</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>matheusbatistachavante@gmail.com</p>
        </div>
      </div>
     
    </section>
  );
};

export default InformationContainer;
