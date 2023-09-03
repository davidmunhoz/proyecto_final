import { Divider } from "@mui/material";

export default function HorizontalDivider(){

    const style = {
        width: "100%",
        height: "2px",
        backgroundColor: "black",
        margin: "10px 0"
    }
    return(
        <Divider orientation="horizontal" sx={style}/>
    )
}