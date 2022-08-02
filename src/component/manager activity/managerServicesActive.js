/* eslint-disable react-hooks/exhaustive-deps */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ManagerServicesActive() {
    const [businessId, setBusinessId] = useState("");
    const [data, setData] = useState([]);

    const location = useLocation();
    // const form = location.state;

    useEffect(() => {
        async function getBusiness() {
            try {
                const res = await axios.get(`https://meetings-test.herokuapp.com/business/${location.state.managerId}`)
                setBusinessId(res.data.id)
                console.log("business: " + res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getBusiness();
    }, []);
    // , [location.state.managerId]

    const navigate = useNavigate();

    const updateServices = (idService) => {
        navigate("/updateService", { state: { id: idService } });
    }

    const deleteServices = async (id) => {
        try {
            const result = await axios.delete(`https://meetings-test.herokuapp.com/service/${id}`)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        async function getServices() {
            try {
                const result = await axios(`https://meetings-test.herokuapp.com/service?business_id=${businessId}`)
                console.log("services: " + result.data);
                setData(result.data)
            } catch (error) {
                console.error(error);
            }
        }
        getServices();
    }, [businessId])

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
                            <Button onClick={() => { updateServices(item.id) }} size="small" color="primary">
                                edit
                            </Button>
                            <Button onClick={() => { deleteServices(item.id) }} size="small" color="primary">
                                delete
                            </Button>
                        </CardActions>
                    </Card>
                </li>
            ))}
        </ul>

    );
}
