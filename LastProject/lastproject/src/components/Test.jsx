// import React, { useState, useMemo, useCallback } from 'react'

// const Child = React.memo(({ name }) => {
//     console.log('🔁 Child render');
//     return <div>Child name: {name}</div>;
// });


// const Child = ({ name }) => {
//   console.log('🔁 Child render');
//   return <div>Child name: {name}</div>;
// };

// function computeExpensive(number) {
//     console.log('💡 Tính toán...');
//     let result = 0;
//     for (let i = 0; i < 1e6; i++) result += number;
//     return result;
// }


// const Button = React.memo(({ onClick }) => {
//   console.log('🔁 Button render');
//   return <button onClick={onClick}>Click me</button>;
// });



const Test = () => {
    // const [count, setCount] = useState(0);
    // const [number, setNumber] = useState(1);

    // // const expensiveResult = useMemo(() => computeExpensive(number), [number]);
    // const expensiveResult = computeExpensive(number);
    // console.log("Giá trị count:", count);


    // const handleClick = useCallback(() => {
    //     console.log('clicked');
    // }, []);


    // const handleClick = () => {
    //     console.log('clicked');
    // };



    return (
        <div className='p-100'>
            {/* <button className='border-4' onClick={() => setCount(count + 1)}>Increase</button>

            <Child name="Alice" /> */}

            {/* <button className='border-4' onClick={() => setCount(count + 1)}>Tăng Count</button>
            <p>Kết quả: {expensiveResult}</p> */}


            {/* <h1>{count}</h1>
            <button className='border-4' onClick={() => setCount(count + 1)}>Increase</button>
            <Button onClick={handleClick} /> */}
        </div>

    )



}

export default Test
