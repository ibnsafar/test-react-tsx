import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select, SelectChangeEvent} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import "./../css/app.css";

const SecondPage = (props: any) => {
    const [cur, setCur] = useState("");
    const [conver, setConver] = useState<any>([]);
    const handleChange = (event: SelectChangeEvent) => {
        setCur(event.target.value as string);
        switch (event.target.value as string) {
            case "RUB":
                setConver([
                    {cur: "EUR", value: 3.2},
                    {cur: "USD", value: 1}
                ])
                break;
            case "USD":
                setConver([
                    {cur: "EUR", value: 3.2},
                    {cur: "RUB", value: 1}
                ])
                break;
            case "EUR":
                setConver([
                    {cur: "RUB", value: 3.2},
                    {cur: "USD", value: 1}
                ])
                break;
            default:
                console.log("default")
                break;
        }
        console.log(conver)
    };
    useEffect(() => {
        console.log(props)
    }, [])

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