import React from 'react';
import '../styles/Comer.css';

import fabada from '../images/fabada.jpg';
import sidra from '../images/sidra2.jpg';
import queso from '../images/queso.jpg';
import pixin from '../images/pixin.jpg';
import arroz from '../images/arroz.jpg';
import cachopo from '../images/cachopo.jpg';

const platos = [
  { img: fabada, title: "Fabada Asturiana", desc: "La fabada asturiana es uno de los platos más representativos de Asturias. Este guiso contundente se prepara con fabes (judías), chorizo, morcilla y tocino, y es ideal para los fríos días de invierno. Disfrutar de una buena fabada es una experiencia culinaria imprescindible en Gijón y en toda Asturias." },
  { img: sidra, title: "Sidra Asturiana", desc: "La sidra asturiana es una bebida tradicional de la región que se escancia para liberar todo su sabor y aroma. Es el acompañante perfecto para muchos platos asturianos, especialmente en las comidas festivas y en las sidrerías de Gijón, donde podrás disfrutar de su sabor auténtico." },
  { img: queso, title: "Queso Cabrales", desc: "El queso Cabrales es un queso azul asturiano elaborado a base de leche de vaca, cabra o oveja. Es conocido por su sabor fuerte y picante, y es uno de los quesos más emblemáticos de Asturias. Suele servirse como aperitivo o acompañando otros platos típicos." },
  { img: pixin, title: "Pixín (Rape)", desc: "El pixín, o rape, es un pescado muy popular en la gastronomía asturiana, especialmente en Gijón, donde se prepara de diferentes maneras. Es conocido por su carne firme y sabrosa, y se sirve en guisos, parrilladas o como plato principal acompañado de salsa." },
  { img: arroz, title: "Arroz con Pitu", desc: "Este plato tradicional se prepara con arroz y pitu, una variedad de pollo autóctona de Asturias. El arroz se cocina con el caldo del pitu, lo que le otorga un sabor excepcional. Es un plato muy representativo de la gastronomía asturiana que se disfruta tanto en celebraciones como en comidas familiares." },
  { img: cachopo, title: "Cachopo", desc: "El cachopo es uno de los platos más populares de la gastronomía asturiana. Se trata de dos filetes de carne empanados y rellenos de jamón y queso, que luego se fríen hasta quedar crujientes. Es un plato delicioso y muy sabroso, ideal para disfrutar con una sidra asturiana." }
];

function Comer() {
  return (
    <div className="comer">
      <section id="que-comer">

      <header className="comer-header">
        <h2>Gastronomía Asturiana y Gijonesa</h2>
        <p>Sumérgete en la riqueza culinaria de Asturias con estos platos típicos que reflejan la tradición y sabor de la región. Desde la icónica fabada asturiana hasta el delicioso cachopo, cada bocado te transportará a la esencia de Gijón y su gastronomía única. Disfruta de un festín de sabores autóctonos, donde la sidra, el queso Cabrales y el pixín (rape) son solo el comienzo de un viaje gastronómico que no te puedes perder. ¡Ven a probarlos y sentirte como un verdadero asturiano!</p>
      </header>

      <div className="comer-list">
        {platos.map((plato, index) => (
          <div key={index} className="plato">
            <img src={plato.img} alt={plato.title} className="plato-img" />
            <div className="plato-texto">
              <h3>{plato.title}</h3>
              <p>{plato.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

export default Comer;
