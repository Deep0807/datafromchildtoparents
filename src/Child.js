
import { useState } from 'react';

function Child({ setData }) {

    return (
        <>
            <button onClick={() => setData('childData')}>Send Data</button>
        </>
    );
}

export default Child;