
import React from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import Link from 'next/link';


const items = [
    {

        url: "./img1.png",
        caption1: "Regulated",
        caption2: "MiFID II investment firm. Virtual Asset ",
        caption3: "Service Provider. PSD2 payment",
        caption4: " institution. E-Money Institute.",
    },
    {

        url: "./img2.png",
        caption1: "Safe and secure",
        caption2: "Funds secured in offline wallets.",
        caption3: "Fully compliant with AML5 and GDPR.",
        caption5: "Read more",
    },
    {

        url: "./img3.png",
        caption1: "Trusted",
        caption2: "3.5+ million happy users.",
        caption3: "Excellent Trustpilot rating.",
        caption5: "Read reviews",
    },

]
 
 export default function Card() {
    return(

        <>
        <Stack 
       rowGap={{xs:"65px", sm:"97px", md:"130px"}} 
       columnGap={
        {xs:"65px", sm:"97px", md:"130px"}}  
       px={{xs:"10px", sm:"85px", md:"114px"}}
       mt={{xs:"119px", sm:"178px", md:"200px"}}
       direction={{ xs: "column", md: "row" }} >
        {items.map((item, index)  =>  (

<Box textAlign="center"  key={index}>
    <img  src={item.url} width="100px" height="100px" alt="" />
<Typography  mt={5} fontSize={{ xs:"11px", sm:"17px", md:"23px"}}
style={{fontWeight: "800px"}}>{item.caption1}</Typography>
<Typography>{item.caption2}</Typography>
<Typography>{item.caption3}</Typography>
<Typography>{item.caption4}</Typography>
<Link href='/'>
<Typography mt={3}> {item.caption5}</Typography>
</Link>
</Box>
        ))}
        
        
        </Stack>

        </>
    )
 };