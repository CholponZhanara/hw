import Components from './components/components';
import './App.css';


const flower={
  date: new Date(),
   type: 'pion',
   price: 200,

   FlowerName:{
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8owE2EF_MEKAlyqWlvx07rYCKl0n34IGs7A&usqp=CAU',
    name: 'white pion'
   }
}



function App() {
  return (
    <div className="App">
   <Components type={flower.type} price={flower.price} date={flower.date} FlowerName={flower.FlowerName} />
    </div>
  );
}

export default App;
