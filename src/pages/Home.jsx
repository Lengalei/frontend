import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
    const [ruth, setRuth] = useState("");
    return (  
        
        <div className="home">
        <Navbar/>
        <h1>Home</h1>
        <hr />
        <hr />
        <section>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam error repellat eius aliquid voluptas ipsum quo labore laudantium vitae facere, alias officia similique nesciunt, odio ullam sit dolorum soluta. Eos deleniti rem omnis aspernatur, recusandae corporis delectus at modi iure beatae harum fugiat porro quis ad vero, officia nesciunt pariatur.</p>
            <p>Ab ea sequi, dolorem libero doloremque quidem veniam sit numquam, enim reprehenderit autem? Expedita tempore est officia eum non earum quaerat atque voluptas ut quas mollitia cumque illum adipisci voluptatibus sed ducimus vero ad, placeat facilis repellendus similique explicabo necessitatibus at. Eligendi beatae atque itaque laudantium tenetur nihil, ratione corrupti!</p>
            <p>Exercitationem, possimus. Ea quod qui, ipsam molestiae sunt iste totam explicabo nostrum mollitia perspiciatis quaerat accusantium architecto fugiat reprehenderit cumque, cupiditate unde ab repellendus neque! Harum quia modi accusantium porro molestiae eaque iusto accusamus dolorem ullam, eos ad? Minus perferendis voluptatem voluptatibus, ab debitis odit iure iste maxime quas minima.</p>
            <p>Facere, est numquam. Repellat ad tenetur possimus fuga et quia aliquid obcaecati. Eius quo atque dolores eaque tenetur voluptatibus, saepe magni molestias ducimus id iure in cumque enim, aperiam nam, voluptatem tempora sint nesciunt recusandae. Vero eos aliquid, voluptate labore impedit aperiam voluptatem reprehenderit, iure at dolores repudiandae eligendi neque!</p>
            <p>Qui voluptas dolores cumque sunt eum ex quam quod laudantium in expedita iusto similique, quibusdam at optio, deleniti eaque aliquam nostrum. Vero voluptatibus porro et non laboriosam at explicabo magnam debitis numquam, corporis rem delectus, cum temporibus est atque assumenda nesciunt adipisci molestiae deserunt amet? Repellendus quo quasi facere eaque!</p>
        </section>
        <About/>
        <Footer/>
        </div>
    );
}
 
export default Home;