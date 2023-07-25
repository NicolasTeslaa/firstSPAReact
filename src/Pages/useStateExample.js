import { useState } from 'react';

const useStateExample = () => {

    const [name, setName] = useState('Pablo');

    const handleChangeName = () => {
        setName('José')
    }

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}></button>
        </div>
    )
}