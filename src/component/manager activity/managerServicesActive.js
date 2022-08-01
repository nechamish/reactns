/* eslint-disable react-hooks/exhaustive-deps */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function ManagerServicesActive() {
    // const [managerId, setManagerId] = useState("5e8da483-0a02-4131-b52f-648cf5e4c974");
    const [businessId, setBusinessId] = useState("20db5cfa-2016-44ae-a3a4-63218ff21d3c");
    const [serviceId, setServiceId] = useState("66fce059-0e66-49f6-8181-f48d01d5b4bd");
    const [data, setData] = useState([]);

    const location = useLocation();
        // const form = location.state;

    useEffect(() => {
        async function getBusiness() {
            try {
                await axios.get(`https://meetings-test.herokuapp.com/business/${location.state.managerId}`)
                    .then((res) => {
                        setBusinessId(res.data.id)
                        console.log("business: " + res.data);
                    })
            } catch (err) {
                console.log(err)
            }
        }
        getBusiness();
    });
    // , [location.state.managerId]

    const updateServices = () => {

    }

    const deleteServices = async () => {
        try {
            await axios.delete(`https://meetings-test.herokuapp.com/service/${serviceId}`)
                .then((result) => {
                    console.log(result);
                }).catch((err) => {
                    console.error(err);
                });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        async function getServices() {
            await axios(`https://meetings-test.herokuapp.com/service?business_id=${businessId}`)
                .then((result) => {
                    console.log("services: " + result.data);
                    setData(result.data);
                }).catch((err) => {
                    console.error(err);
                });
        }
        getServices();
    })

    return (
        <ul>
            {data.length === 0 ? <p>There are no services for this business</p> : data.map(item => (
                <li>
                    <Card sx={{ maxWidth: 345 }} key="{item.id}">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                alt="green iguana"
                                image="https://www.israeliguide.co.il/wp-content/uploads/2021/06/DJI_0396.00_00_24_26.Still009.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    price: {item.cost}
                                    opening hours: {item.OpeningHours}
                                    address: {item.address.number}{item.address.street}{item.address.city}
                                    meetings duration: {item.durationOfMeeting}
                                    number of meetings: {item.numOfMeetings}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={updateServices} size="small" color="primary">
                                edit
                            </Button>
                            <Button onClick={deleteServices} size="small" color="primary">
                                delete
                            </Button>
                        </CardActions>
                    </Card>
                </li>
            ))}
        </ul>

    );
}
