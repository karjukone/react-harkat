import {useState, useEffect, useRef} from 'react';

function HookDemo() {
    const [count, setColor] = useState(0);
    const testElement = useRef(null);

    useEffect(() => {
        testElement.current?.style.setProperty('background-color', `rgb(${count * 5}, 0, 0`),
    };
);
}