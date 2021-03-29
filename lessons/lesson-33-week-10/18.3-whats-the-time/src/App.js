import React,{useState} from 'react';
import Input from './Input'
const App = () => {
    const [s, setS] = useState(0)
    const [m, setM] = useState(0)
    const [h, setH] = useState(0)
    const changeS = (e) => {
        let val = e.target.value
            setS(val)
            setM(val / 60)
            setH((val / 60) / 60)
    }
    const changeM = (e) => {
        let val = e.target.value
            setS(val * 60)
            setM(val)
            setH(val / 60)
        }
    const changeH = (e) => {
        let val = e.target.value
            setS((val * 60) * 60)
            setM(val * 60)
            setH(val)
    }
    return (
        <>
            <Input name='seconds' onChange={changeS} value={s}/>
            <Input name='minutes' onChange={changeM} value={m}/>
            <Input name='hours' onChange={changeH} value={h}/>
        </>
    );
}

export default App;
