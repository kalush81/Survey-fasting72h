import React from "react";
import { Link } from 'react-router-dom'

const btnStyle = {
    border: '2px solid black',
    borderRadius: '25px',
    margin: '0 auto',
    display: 'block',
    padding: '10px 20px',
    marginTop: '10%'
}

export default function Home({setIsRead}) {
  return (
    <div className='sv-title' style={{padding: '10%', lineHeight: '2rem', letterSpacing: '1px'}}>
      <p>
      W związku z prowadzeniem badań dotyczących samooceny możliwości 
      fizycznych i psychicznych osób regularnie trenujących po przebyciu 72 – godzinnego postu,
      zwracam sie z uprzejmą prośbą o udzielenie wiarygodnych odpowiedzi na poniższe pytania.
      Dane uzyskane w czasie badania będą wykorzystywane do celów naukowych i nie będą
      udostępniane osobom postronnym. Ankieta jest anonimowa.
      </p>
      <p>
        Ankieta dla osób, które przynajmniej raz stosowały post minimum 72h, są
        sportowcami albo podejmują aktywność fizyczną przynajmniej według
        zaleceń WHO: W przypadku dorosłych (18-64 lata) WHO zaleca co najmniej
        150-300 minut umiarkowanej aktywności fizycznej lub 75 do 100 minut
        intensywnych ćwiczeń tygodniowo.
      </p>
      <Link className='btnLink' to='/survey'><button style={btnStyle} onClick={() => setIsRead(true)}><span>przejdź do ankiety</span></button></Link>
    </div>
  );
}
