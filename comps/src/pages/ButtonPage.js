import {GoBell, GoDatabase} from 'react-icons/go';
//import './App.css';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () =>{
        console.log('clicked');
    };

  return (
  <div>
    <div>
      <Button onClick={handleClick} className='mb-5' success rounded outline><GoBell/>click me!!</Button>
    </div>
    <div>
      <Button danger outline>Buy Now!</Button>
    </div>
    <div>
      <Button warning>See Deals!</Button>
    </div>
    <div>
      <Button secondary outline>Hide Ads!</Button>
    </div>
    <div>
      <Button primary rounded><GoDatabase/>something!</Button>
    </div>
  </div>
  );
}

export default ButtonPage;
