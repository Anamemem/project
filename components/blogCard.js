
import React from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import Link from 'next/link';
import Image from "next/image"


const items = [
    {

        url: "./pic1.png",
        caption1: "Cryptocurrencies",
        caption2: "Buy,sell & swap the",
        caption3: "cryptocurrencies you",
        caption4: " want anytime,anywhere.",
    },
    {

        url: "./pic2.png",
        caption1: "NFTs",
        caption2: "Invest in fractions of your",
        caption3: "favourite NFTs without ",
        caption4: "committing to a whole share.",
    },
    {

        url: "./pic3.png",
        caption1: "Precious Metals",
        caption2: "Auto-invest in the whole",
        caption3: "crypto market with a",
        caption4: "single click.",
    },

]
 
 export default function BlogCard() {
    return(

        <>
        <Stack 
       rowGap={{xs:"65px", sm:"97px", md:"130px"}} 
       columnGap={
        {xs:"65px", sm:"97px", md:"130px"}}  
       
       mt={{xs:"119px", sm:"178px", md:"160px"}}
       direction={{ xs: "column", md: "row" }} >
        {items.map((item, index)  =>  (

<Box textAlign="center"  key={index}>
    <Image src={item.url} width="300px" height="200px" alt="" />
<Typography  mt={5} fontSize={{xs:"17px", sm:"26px", md:"34px"}}
style={{fontWeight: "700px"}}>{item.caption1}</Typography>
<Typography>{item.caption2}</Typography>
<Typography>{item.caption3}</Typography>
<Typography>{item.caption4}</Typography>
</Box>
        ))}
        
        
        </Stack>

        </>
    )
 };