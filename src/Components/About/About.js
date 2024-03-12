import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../About/About.css";
import about from "../../assets/cards/ss4.png";
import Title from "../Title/Title";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-container">
        <Title title="About Us" />
        <div className="para">
          <img src={about} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            id eos sint eligendi modi, nam ex qui fugiat optio mollitia
            deserunt, atque ullam nihil vero doloribus deleniti voluptatibus
            dicta corrupti! Veritatis autem iusto nihil, sit laboriosam quasi!
            Porro dicta voluptatibus, aspernatur sed dolorem animi atque
            consectetur eveniet nobis quis quae distinctio officiis in unde ab
            magni. Fugit voluptas, magnam velit dicta porro dignissimos
            assumenda sint praesentium inventore exercitationem voluptatem
            libero repellendus laboriosam pariatur cumque aspernatur tenetur
            odio incidunt iusto minus molestiae ipsam dolorum eaque accusantium.
            Ad, totam assumenda unde id libero cum quam nesciunt labore ea earum
            repellendus sequi iure et rem, fuga sint eveniet omnis itaque neque
            tenetur tempora quia quidem! Odio error, dignissimos consequatur hic
            tempora, commodi deleniti nihil dolorum, repellat totam id.
            Consequatur accusamus asperiores error a, at possimus nemo.
            Repellendus accusamus pariatur numquam iste cum, quia ducimus rem
            aperiam? Suscipit in tenetur quisquam, maxime voluptates recusandae
            impedit! Commodi quod reiciendis eius dolore numquam provident
            fugiat, a fugit officia nulla rerum, harum ipsum! Totam, fuga, autem
            eaque sunt omnis ullam, molestiae repellendus cumque quae numquam
            vitae. Delectus, impedit eos magni possimus quod amet fugit aut. Eum
            molestias voluptate mollitia officia explicabo non perferendis
            corporis in incidunt odio?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
