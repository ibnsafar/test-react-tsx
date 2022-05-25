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
    const [cur, setCur] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCur(event.target.value as string);
    };
    useEffect(() => {
        console.log(props)
    }, [])
    console.log(cur)
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
                </CardContent>
            </Card>
        </>
    )
}
export default SecondPage;