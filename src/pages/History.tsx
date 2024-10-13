import Page from "@/template/page";
import './HistoriaPage.css';
import {Cake, Construction, HousePlus, PartyPopper, ShoppingBasket, ShoppingCart, Store } from "lucide-react";
import { HistoryCard } from "@/components/displays/card";


const HistoriaPage = () => {
    return (
        <Page titulo="Historia">
            {/* Icono de página en construcción */}
            <h1 className="titulos" z-index="100%">Conoce nuestra Historia </h1>
          
            <nav className="navhis">
                <ul className="ulhis">
                    <li>
                        <HistoryCard  avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6FdKq89fI9hTIPV4ctwOecDLMFeeYHh6Zg&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KuCTSs64AbBfF5qGU627HwgzZdfGv4Mw2g&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdoQvetif2XNUhTK7qY5eXEGSyi669iHjuw&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://a.mktgcdn.com/p/0FTSTPFICYun8KrYuHcND1xZe6jpoKDSeLqCiMwUk5k/720x480.jpg" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6FdKq89fI9hTIPV4ctwOecDLMFeeYHh6Zg&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6FdKq89fI9hTIPV4ctwOecDLMFeeYHh6Zg&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6FdKq89fI9hTIPV4ctwOecDLMFeeYHh6Zg&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6FdKq89fI9hTIPV4ctwOecDLMFeeYHh6Zg&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6FdKq89fI9hTIPV4ctwOecDLMFeeYHh6Zg&s" email="" name="" />
                    </li>
                    <li>
                        <HistoryCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6FdKq89fI9hTIPV4ctwOecDLMFeeYHh6Zg&s" email="" name="" />
                    </li>

                </ul>
            </nav>

            {/* Línea de tiempo */}

            
            <div className="timeline">
                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#FF5656' }}>
                        <ShoppingBasket size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>1980 - Inicio tienda </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque .</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#FFA500' }}>
                        <Store size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>1990 - creacion de mercado</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque ..</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#32CD32' }}>
                        <ShoppingCart size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2000 - segunda sucursal</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque ..</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#1E90FF' }}>
                        <Cake size={40}  />
                    </div>
                    <div className="timeline-content">
                        <h3>2010 - aniversario #4 </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque ..</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#6A5ACD' }}>
                        <HousePlus size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2020 - inaguracion mayoreo</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque ..</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#8A2BE2' }}>
                        <PartyPopper size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2022 - aniversario #8</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque ..</p>
                    </div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#1E90FF' }}>
                        <Construction size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2025 - proxima sucursal</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque ..</p>
                    </div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#1E90FF' }}>
                        <Construction size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2025 - proxima sucursal</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default HistoriaPage;
