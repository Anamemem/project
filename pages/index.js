import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { fontWeight } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import Nav from "../components/nav"
import Card from "../components/card"
import BlogCard from "../components/blogcard"


export default function Home() {
  return (
    <>
          <Nav />
      <Stack direction={{xs: "column", sm: "column", md: "row"}}>
       <Box maxWidth={{xs:"317px", sm:"100%", md:"635px"}}
           px={{xs:"17px", sm:"26px", md:"34px"}}
           mt={{xs:"220px", sm:"200px", md:"104px"}}
           width="100%">

           <Typography textAlign="center"
            fontSize={{xs:"38px", sm:"68px", md:"84px"}} style={{fontWeight: "700"}}> Invest in what <br />
           you believe in.</Typography>

           <Box px={{xs:"57px", sm:"121px", md:"114px"}}
           
           mt={{xs:"70px", sm:"50px", md:"71px"}}> 

           <Button 
           sx={{ minWidth: { sm: "88px", md: "358px" }, minHeight: {xs:"47px", sm:"71px", md:"95px"} }}
           style={{backgroundColor: "#021BFF", color: "white"}}
           >
            <Typography fontSize={{xs:"17px", sm:"26px", md:"34px"}}>Start Investing</Typography>
           
            </Button>
       </Box>
       </Box>

       <Box display={{ xs: "none", md: "flex" }}>

<img src="./Group 12.png" width="669px" height="580px"    alt="" />
  
     </Box>
    </Stack>
    <Box px={{xs:"27px", sm:"41px", md:"54px"}}> 
    <Card />

    </Box>



    <Stack direction={{xs: "column", sm: "column", md: "row"}}
    mt={{xs:"97px", sm:"146px", md:"194px"}}>
       <Box display={{ xs: "none", md: "flex" }}
       maxWidth={{xs:"334px", sm:"502px", md:"669px"}}>

<img src="./Rectangle 11 (1).png"  width="669px" height="600px"  alt="" />
  
     </Box>
       <Box maxWidth={{xs:"100%", sm:"100%", md:"379px"}}
       minHeight={{xs:"305px", sm:"457px", md:"110px"}}
           px={{xs:"55px", sm:"83px", md:"111px"}}
           mt={{xs:"17px", sm:"16px", md:"104px"}}>

           <Typography  textAlign="center"
            fontSize={{xs:"20px", sm:"39px", md:"46px"}} style={{fontWeight: "700"}}> The easiest way 
            to invest in
            cryptocurrency<br />
           <span style={{color: "#021BFF"}}>  No trading skills.</span> </Typography>

           <Box 
           mt={{xs:"30px", sm:"50px", md:"71px"}}
           px={{xs: "20px", sm: "121px", md: "0px"}}> 

           <Button 
           sx={{ minWidth: { sm: "88px", md: "358px" }, minHeight: {xs:"47px", sm:"71px", md:"95px"} }}
           style={{backgroundColor: "#021BFF", color: "white", fontSize: "30px"}}
           >
          <Typography fontSize={{xs:"17px", sm:"26px", md:"34px"}}>how it works</Typography> 
            </Button>
       </Box>
       </Box>

    </Stack>


  <Stack px={{xs:"37px", sm:"130px", md:"174px"}} 
  mt={{xs:"109px", sm:"164px", md:"218px"}}
  maxWidth={{xs:"509px", sm:"764px", md:"1019px"}}>
    
      <Typography textAlign="center" style={{fontWeight: "700"}}
      fontSize={{xs:"23px", sm:"34px", md:"46px"}}>
        You don't need to be an expert to <span style={{color: "#021BFF"}}>build <br />
your cryptocurrency portfolio and<br />
digital wealth</span>
</Typography>
    
  </Stack>

  <Stack px={{xs:"27px", sm:"41px", md:"54px"}} mt={10}
  maxWidth={{xs:"683px", sm:"1025px", md:"1366px"}}>
    <Typography style={{fontWeight: "400"}}
      fontSize={{xs:"11px", sm:"17px", md:"23px"}}>Investing in cryptocurrency can be intimidating, especially for beginners. Sometimes managing a<br /> 
crypto investment is daunting due to the uncertainty and volatility of the market, as well as the<br />
 time investment needed to be successful.
</Typography>
  </Stack>
  <Stack px={{xs:"12px", sm:"18px", md:"25px"}} 
  mt={{xs:"109px", sm:"164px", md:"218px"}}
  maxWidth={{xs:"657px", sm:"986px", md:"1315px"}}>
    
      <Typography textAlign="center" style={{fontWeight: "700"}}
      fontSize={{xs:"23px", sm:"34px", md:"46px"}}>
        Get the latest company news and industry updates <br />
        <Link  style={{color: "black"}} href="/">Visit Blog</Link>
</Typography>
    
  </Stack>

  <Box px={{xs:"7px", sm:"41px", md:"54px"}}> 
    <BlogCard />

    </Box>

    <Stack px={{xs:"37px", sm:"130px", md:"174px"}} 
  mt={{xs:"109px", sm:"164px", md:"218px"}}
  maxWidth={{xs:"509px", sm:"764px", md:"1019px"}}>
    
      <Typography textAlign="center" style={{fontWeight: "700"}}
      fontSize={{xs:"23px", sm:"34px", md:"46px"}}>
        Boost your financial literacy skills
</Typography>
    
  </Stack>

 
  <Stack  direction={{xs: "column", md: "row"}} spacing={10}
  px={{xs:"27px", sm:"41px", md:"54px"}} mt={5}
   >
    <Box maxWidth={{xs:"100%", sm:"100%", md:"554px"}}
    minHeight={{xs:"325px", sm:"487px", md:"650px"}}
    px={{xs:"5px", sm:"7px", md:"9px"}}
    style={{backgroundColor: "#CD6A0F"}}
    
    width="100%">

      <Button  style={{backgroundColor: "#D9D9D975",
       margin: "20px", color: "white"}}>24kIONZ BLOG</Button>
       <Typography mt={{xs:"90px", sm:"134px", md:"179px"}} color="white" fontSize={{xs:"17px", sm:"26px", md:"34px"}}>Get the latest company <br />
        news and industry updates

        </Typography>

<Link style={{textDecoration: "none"}}  href="/">
  <Typography mt={5} fontSize={{xs:"11px", sm:"17px", md:"23px"}} 
  color="white">Visit blog</Typography></Link>


    </Box>
    <Box maxWidth={{xs:"100%", sm:"100%", md:"554px"}}
    minHeight={{xs:"325px", sm:"487px", md:"650px"}}
    px={{xs:"5px", sm:"7px", md:"9px"}}
    style={{backgroundColor: "#52EB7D"}}
    width="100%">

      <Button  style={{backgroundColor: "#D9D9D975",
       margin: "20px", color: "white"}}>24kIONZ Academy</Button>

<Typography mt={{xs:"90px", sm:"134px", md:"179px"}} color="white" 
fontSize={{xs:"17px", sm:"26px", md:"34px"}}>Learn all about investing,<br />
Bitcoin and blockchain.
</Typography>

<Link style={{textDecoration: "none"}}  href="/">
  <Typography mt={5} fontSize={{xs:"11px", sm:"17px", md:"23px"}} 
  color="white">Visit Academy</Typography></Link>


    </Box>

 </Stack>
 <Stack px={{xs:"37px", sm:"130px", md:"174px"}} 
  mt={{xs:"109px", sm:"164px", md:"218px"}}
  maxWidth={{xs:"509px", sm:"764px", md:"1019px"}}>
    
      <Typography textAlign="center" style={{fontWeight: "700"}}
      fontSize={{xs:"23px", sm:"34px", md:"46px"}}>
        Frequently asked questions
</Typography>
    
  </Stack>

    </>
  )
}