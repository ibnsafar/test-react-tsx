import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import axios, {AxiosResponse} from "axios";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";

import "./../css/app.css";


const FirstPage = () => {
    const pathApi = "https://v6.exchangerate-api.com/v6/19ec0eedc26164eee311cd0f/latest/USD";
    const [arr, setArr] = useState<any>([]);
    let res: string = "";

    const changedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inValue = event.target.value.toLowerCase().split(" ");
        if (inValue[1] === "rub") {
            if (inValue[3] === "eur") {
                // res === " "
                console.log("rub eur")
            } else if (inValue[3] === "usd") {
            }
        } else if (inValue[1] === "eur") {
            if (inValue[3] === "usd") {

            } else if (inValue[3] === "rub") {
            }
        } else if (inValue[1] === "usd") {
            if (inValue[3] === "eur") {

            } else if (inValue[3] === "rub") {
            }
        }
    }
    useEffect(() => {
        axios.get(pathApi)
            .then((res: AxiosResponse) => {
                console.log(res.data.conversion_rates)
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
    // console.log("needed currencies", arr)
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
                </CardContent>
            </Card>
        </>
    );
}

export default FirstPage;