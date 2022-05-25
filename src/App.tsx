import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import "./css/app.css";
import axios, {AxiosResponse} from "axios";

const App = () => {
    const [arr, setArr] = useState<any>([]);
    const [inputVal, setInputVal] = useState("");
    const changedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setInputVal(event.target.value);
    }
    useEffect(() => {
        axios.get("https://v6.exchangerate-api.com/v6/19ec0eedc26164eee311cd0f/latest/USD")
            .then((res: AxiosResponse) => {
                console.log(res.data.conversion_rates)
                setArr(res.data.conversion_rates)
            })
    }, [])
    return (
        <>
            <div className="container">
                <TextField id="outlined-basic"
                           label="Outlined"
                           onChange={changedValue}
                           variant="standard"/>
                {arr && Object.keys(arr).map((item: any, index: any) => {
                    return <p key={index}>{item} {item.USD}</p>
                })}
            </div>
        </>
    );
}

export default App;
