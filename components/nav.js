import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { fontWeight } from "@mui/system"
import Image from "next/image"
import Link from "next/link"


export default function DefaultAppBar() {
  return (
    <AppBar
      elevation={0}
      sx={{ bgcolor: "transparent", position: "relative", minHeight: "auto" }}
    >
      <Toolbar
        sx={{
          display: "block",
          pl: { xs: "37px", sm: "85px", md: "24px" },
          pr: { xs: "24px", sm: "81px", md: "108px" },
          mt: { xs: "18px", sm: "27px", md: "26px" },
        }}
        style={{ minHeight: "auto" }}
      >
        <Stack
          direction={"row"}
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems={"center"}
          columnGap="20px"
          rowGap="60px"
        >
          <Stack
            direction={"row"}
            columnGap={{ xs: "41px", sm: "61px", md: "82px" }}
          >
            <Box
              width={{ xs: "53px", sm: "85px", md: "121px" }}
              position="relative"
            >
             <Typography  fontSize={{xs:"17px", sm:"26px", md:"36px"}}
              style={{fontWeight: "700", color: "#021BFF"}}
              > 
              24KOINZ</Typography>
            </Box>
            <Stack
              display={{ xs: "none", md: "flex" }}
              direction={"row"}
              columnGap={{ xs: "24px", sm: "36px", md: "20px" }}
              sx={{pl: "390px"}}
            >
             
               
                  <Button sx={{ color: "black", fontWeight: "700", fontSize: "17px"}}>how it works</Button>
                  <Button sx={{ color: "black", fontWeight: "700", fontSize: "17px"}}> Pricing</Button>
                  <Button sx={{ color: "black", fontWeight: "700", fontSize: "17px"}}> NIG</Button>
                  <Button sx={{ color: "black", fontWeight: "700", fontSize: "17px"}}> Login</Button>
                
             
            </Stack>
          </Stack>
          <Box>
            <Link href="/login"  style={{}}>
            <Button sx={{ minWidth: { sm: "88px", md: "118px" }  }}
            style={{backgroundColor: "#021BFF", color: "white"}}>
            Get Started
            </Button>
            </Link>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}