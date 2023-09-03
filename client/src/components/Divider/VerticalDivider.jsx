import { Divider } from "@mui/material";

export default function VerticalDivider(){

    const style = {
        borderLeft: "3px solid black",
        height: "100%",
    }

    return(
        <Divider orientation="vertical" sx={style}/>
    )
}