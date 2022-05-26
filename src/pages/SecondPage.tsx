import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select, SelectChangeEvent} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import "./../css/app.css";
import axios, {AxiosResponse} from "axios";

const SecondPage = () => {
    const [cur, setCur] = useState("");
    const [conver, setConver] = useState<any>([]);
    const [arr, setArr] = useState<any>([]);
    const pathApi = "https://v6.exchangerate-api.com/v6/19ec0eedc26164eee311cd0f/latest/USD";

    //AGAIN I AM FETCHING DATA FROM SAME API CAUSE
    //IF I GET DATA FROM PARENT AND REFRESH THIS CHILD
    //IT WILL RAISE ERROR.

    const handleChange = (event: SelectChangeEvent) => {
        setCur(event.target.value as string);
        switch (event.target.value as string) {
            case "RUB":
                setConver([
                    {cur: "EUR", value: (1 / arr[2].rub * arr[1].eur).toFixed(3)},
                    {cur: "USD", value: (1 / arr[2].rub).toFixed(3)}
                ])
                break;
            case "USD":
                setConver([
                    {cur: "EUR", value: arr[1].eur},
                    {cur: "RUB", value: arr[2].rub}
                ])
                break;
            case "EUR":
                setConver([
                    {cur: "RUB", value: (arr[2].rub / arr[1].eur).toFixed(2)},
                    {cur: "USD", value: (1 / arr[1].eur).toFixed(2)}
                ])
                break;
            default:
                console.log("default")
                break;
        }
        console.log(conver)
    };
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
    console.log(arr)
    return (
        <>
            <Card className={"container"}>
                <CardContent>
                    <Link to={"/"} style={{textDecoration: "none", color: "blue"}}
                    >This is Second Page</Link>
                    <FormControl fullWidth variant={"filled"} style={{marginTop: "2rem"}}>
                        <InputLabel id="inLabel">Currency</InputLabel>
                        <Select
                            labelId="inLabel"
                            id="selectId"
                            value={cur}
                            label="Age"
                            onChange={handleChange}>
                            <MenuItem value={"RUB"}>RUB</MenuItem>
                            <MenuItem value={"EUR"}>EUR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>
                    </FormControl>
                    {conver.map((item: any, index: any) => {
                        return <div key={index} style={{
                            display: "flex",
                            marginTop: "2rem"
                        }}>
                            <p>{item.cur} : {item.value}</p>
                        </div>
                    })}
                </CardContent>
            </Card>
        </>
    )
}
export default SecondPage;