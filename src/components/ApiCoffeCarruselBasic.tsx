import axios from "axios";
import { useEffect, useState } from "react";

// {
//   "title": "Latte",
//   "description": "Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor.",
//   "ingredients": [
//     "Espresso",
//     "Ångad mjölk"
//   ],
//   "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
//   "id": 2
// },

export const ApiCoffeCarruselBasic = () => {

    const [coffeeList, setcoffeeList] = useState<Array<string>|Array<null>>(Array);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.sampleapis.com/coffee/hot');
                setcoffeeList(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);
    console.log(coffeeList);

    return (
        <div className="container-fluid p-0">
        <div className="text-center mb-4">
          <h1 className="text-white">Coffee List</h1> {/* Título del carrusel centrado */}
        </div>
        <div className="carousel-container">
          <div id="coffeeCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {coffeeList.map((coffee, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={coffee.image} className="d-block w-100" alt={coffee.title} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{coffee.title}</h5>
                    <p>{coffee.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
}
