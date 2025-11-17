import {useState} from 'react';

const Counter = () => {
  // element.querySelector.addEventHandler('click', teejotain);

  //let count = 0;
  // const handleClickWrong = () => {
  //   count++;
  //   console.log('Count:', count);
  // };

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClickRight = () => {
    setCount(count + 1);
    console.log('Count:', count);
  };

  const handleTyping = (e) => {
    console.log(name);
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClickRight}>Click me</button>
      </div>
      <input type="text" placeholder="nimesi" onChange={handleTyping} />
    </>
  );
};

export default Counter;