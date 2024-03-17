import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Bilal');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        // return names[int];
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count+1);
        setCount(count+1);
        console.log(count);
    }

    const onHandleChecked = (name) => {
        return console.log(`Name ${name} was entered!`);
    }

    const onHandle3= () => {
        console.log(count);
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Count Click</button>
            <button onClick={() => onHandleChecked('Omer')}>Click 2</button>
            <button onClick={onHandle3}>Click 3</button>
        </main>
    )
}

export default Content