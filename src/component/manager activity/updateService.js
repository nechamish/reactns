import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function UpdateService() {

    const [service, setService] = useState({});
    const location = useLocation();
    const form = location.state;
    const inputName = useRef();
    const inputNum = useRef();
    const inputDuration = useRef();
    const inputCost = useRef();
    const inputOpeningHours = useRef()
    const inputNumber = useLocation();
    const inputCity = location.state;
    const inputStreet = useRef();

    useEffect(() => {
        async function getService() {
            try {
                await axios.get(`https://meetings-test.herokuapp.com/service/${form.id}`)
                    .then((res) => {
                        setService(res.data)
                        console.log("service: " + res.data);
                    })
            } catch (err) {
                console.log(err)
            }
        }
        getService();
    }, [form.id]);

    const update = async () => {

        const inputService = {
            "service": {
                "name": inputName.current?.value,
                "numOfMeetings": inputNum.current?.value,
                "durationOfMeeting": inputDuration.current?.value,
                "cost": inputCost.current?.value,
                "OpeningHours": inputOpeningHours.current?.value,
                "address": {
                    "city": inputCity.current?.value,
                    "street": inputStreet.current?.value,
                    "number": inputNumber.current?.value,
                }
            }
        }
        try {
            await axios.put(`https://meetings-test.herokuapp.com/service/${service.id}`, inputService)
                .then((res) => {
                    console.log("business: " + res);
                })
        } catch (error) {
            console.error("in update service: " + error.message);
        }
    }

    return (
        <>
            {service &&
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="service name"
                            defaultValue="bananas"
                            inputRef={inputName}
                            variant="standard"
                        />
                        <TextField
                            id="standard-number"
                            label="number of meetings"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={inputNum}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="duration of every meeting"
                            type="text"
                            inputRef={inputDuration}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="price"
                            type="number"
                            inputRef={inputCost}
                            variant="standard"
                        />
                        address
                        <TextField
                            id="standard-read-only-input"
                            label="city"
                            type="text"
                            inputRef={inputCity}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="street"
                            type="text"
                            inputRef={inputStreet}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="number house"
                            type="text"
                            inputRef={inputNumber}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="OpeningHours"
                            type="text"
                            inputRef={inputOpeningHours}
                            variant="standard"
                        />
                    </div>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={update} variant="outlined" startIcon={<SendIcon />}>
                            send and update
                        </Button>
                    </Stack>
                </Box>}
        </>
    );
}
