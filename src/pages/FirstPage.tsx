import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import axios, {AxiosResponse} from "axios";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";
import SecondPage from "./SecondPage";

import "./../css/app.css";

const FirstPage = () => {
    const pathApi = "https://v6.exchangerate-api.com/v6/19ec0eedc26164eee311cd0f/latest/USD";
    const [arr, setArr] = useState<any>([]);
    const [res, setRes] = useState<any>('');

    const changedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inValue = event.target.value.toLowerCase().split(" ");
        if (inValue[1] === "rub") {
            if (inValue[3] === "eur") {
                setRes((parseInt(inValue[0]) / arr[2].rub * arr[1].eur).toFixed(2))
            } else if (inValue[3] === "usd") {
                setRes((parseInt(inValue[0]) / arr[2].rub).toFixed(2))
            }
        } else if (inValue[1] === "eur") {
            if (inValue[3] === "usd") {
                setRes((parseInt(inValue[0]) / arr[1].eur).toFixed(2))
            } else if (inValue[3] === "rub") {
                setRes((parseInt(inValue[0]) / arr[1].eur * arr[2].rub).toFixed(2))
            }
        } else if (inValue[1] === "usd") {
            if (inValue[3] === "eur") {
                setRes((parseInt(inValue[0]) * arr[1].eur).toFixed(2))
            } else if (inValue[3] === "rub") {
                setRes((parseInt(inValue[0]) * arr[2].rub).toFixed(2))
            }
        }
    }
    useEffect(() => {
        axios.get(pathApi)
            .then((res: AxiosResponse) => {
                setArr([
                    {name: "usd", usd: res.data.conversion_rates.USD.toFixed(2)},
                    {name: "eur", eur: res.data.conversion_rates.EUR.toFixed(2)},
                    {name: "rub", rub: res.data.conversion_rates.RUB.toFixed(2)}
                ])
                //    fetching data from api
            }).catch((error: Error) => {
            console.log(error)
        })
    }, [])
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
                    <p style={{marginTop: "2rem"}}>{res}</p>
                </CardContent>
            </Card>
        </>
    );
}

export default FirstPage;