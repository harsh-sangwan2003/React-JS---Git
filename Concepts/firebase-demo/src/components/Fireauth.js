import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

function Fireauth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    let create = async () => {

        let res = await auth.createUserWithEmailAndPassword(email, password);
        console.log(res);
    }

    useEffect(() => {

        let unsub = auth.onAuthStateChanged((user) => {
            setUser(user)
        })

        return () => unsub();

    }, [])

    let login = async () => {

        await auth.signInWithEmailAndPassword(email, password);
    }

    let logout = async () => {

        await auth.signOut();
    }

    return (
        <>
            {
                user == null ?
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor='passwd'>Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button onClick={login}>Login In</button>
                    </div> :
                    <div>
                        <h2>{user.email}</h2>
                        <button onClick={logout}>Sign Out</button>
                    </div>
            }
        </>
    )
}

export default Fireauth