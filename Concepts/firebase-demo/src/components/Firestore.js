import React, { useEffect, useState } from 'react'
import { database } from '../firebase'

function Firestore() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    // Create command
    let createUserInDB = async () => {

        // await database.users.add({ name, age })
        let res = await database.users.doc('1111111').set({ name, age });
        console.log(res);
    }

    // Read Command
    useEffect(() => {
        (async () => {

            let data = await database.users.get();
            data.forEach(obj => console.log(obj.data()));
        })()
    })

    // Update command
    let update = async () => {

        let uid = 'mz6kl201XbgbFAfJHy3Q';

        await database.users.doc(uid).update({
            name, age
        });
    }

    // Delete command
    let remove = async () => {

        let uid = 'mz6kl201XbgbFAfJHy3Q';

        await database.users.doc(uid).delete();
    }

    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor='age'>Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

            <button onClick={update}>Update</button>
            <button onClick={remove}>Delete</button>

        </div>
    )
}

export default Firestore