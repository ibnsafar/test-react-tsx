import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import axios, {AxiosResponse} from "axios";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";
import SecondPage from "./SecondPage";

import "./../css/app.css";


const FirstPage = () => {
    const [arr, setArr] = useState<any>([]);
    const [inputVal, setInputVal] = useState("");
    const [mainCur, setMainur] = useState<any>([])
    const changedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setInputVal(event.target.value);
    }
    useEffect(() => {
        axios.get("https://v6.exchangerate-api.com/v6/19ec0eedc26164eee311cd0f/latest/USD")
            .then((res: AxiosResponse) => {
                console.log(res.data.conversion_rates)
                setArr(res.data.conversion_rates)
                //    fetching data from api
            })
        if (arr != null) {
            //for getting needed currencies
            Object.entries(arr).map((key: any) => {
                if (key[0] === "RUB" || key[0] === "EUR" || key[0] === "USD") {
                    mainCur.push({type: key[0], val: key[1]})
                }
            })
        }
        console.log(mainCur)
    }, [])
    const inArr: any = inputVal.split(" ")
    console.log(inArr);
    return (
        <>
            <Card className={"container"}>
                <CardContent>
                    <Link style={{textDecoration: "none", color: "blue"}}
                          to={"/second_page"}>This is Main Page</Link>
                    <TextField id="outlined-basic"
                               fullWidth
                               label="e.g. 15 usd in rub"
                               onChange={changedValue}
                               variant="standard"/>
                    {/*<SecondPage value={mainCur}/>*/}
                    {inArr && <div style={{marginTop: "2rem"}}>
                        <p>{inArr[0]} {inArr[1]} = {inArr[3]}</p>
                    </div>}
                </CardContent>
            </Card>
        </>
    );
}

export default FirstPage;