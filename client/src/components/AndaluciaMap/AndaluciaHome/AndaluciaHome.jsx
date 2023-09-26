import SvgIcon from "@mui/material/SvgIcon";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const idValues = {
  'huelva': 'huelvaValue',
  'sevilla': 'sevillaValue',
  'cordoba': 'cordobaValue',
  'cadiz': 'cadizValue',
  'malaga': 'malagaValue',
  'almeria': 'almeriaValue',
  'jaen' : 'jaenValue',
  'granada' : 'granadaValue'
};


   
export default function AndaluciaHome({selectProvincia}) {
    // const [fontSizeMap, setFontsizeMap] = useState("")
	// console.log(fontSizeMap)

	// useEffect(()=>{
	// 	if(selectProvincia !== null){
	// 		navigate("/job")
	// 		setFontsizeMap("1500px")
	// 	}else{
	// 	setFontsizeMap("750px")	
	// 	} },[selectProvincia])

  const handleClick = (id) =>{
    const values = idValues[id]
	console.log(values)
	selectProvincia(id)	
  }




  return (
    <SvgIcon sx={{width:"530", height:"750", fontSize:"750px"} } viewBox="0 0 595.3 841.9  " >
<g id="huelva" onClick={() =>handleClick('huelva')} className="huelva" >
	<polygon className="st0" points="192.7,371.9 198.4,377.1 205.5,380 208.1,382.3 208.1,391.2 203.9,389.4 200.4,392.8 197.9,391.5 
		189.8,395.4 184.9,399.5 184.9,402.2 192.4,402.2 192.7,406.6 196.5,414.7 194.3,416.8 192.7,421.1 195,424.8 194.3,428.8 
		194.8,437.6 191.9,440 193,446 191.7,449.6 193.5,452.8 193.5,459.3 191.4,459.3 186.4,447.8 176,440.8 162.4,431.9 154.6,428.5 
		142.1,428.8 135.8,430.1 133.5,426.9 133.5,408.2 130.3,406.1 135.8,390.2 141,387 149.1,373.5 159.8,371.9 160.9,366.7 
		164.3,359.6 169.2,361.5 170.3,366.2 173.4,368.5 181.5,367.7 183.8,372.4 189,374.8 	"/>
</g>
<g id="sevilla"  onClick={() =>handleClick('sevilla')}>
	<polyline className="st0" points="193.5,452.8 191.7,449.6 193,446 191.9,440 194.8,437.6 194.3,428.8 195,424.8 192.7,421.1 
		194.3,416.8 196.5,414.7 192.7,406.6 192.4,402.2 184.9,402.2 184.9,399.5 189.8,395.4 197.9,391.5 200.4,392.8 203.9,389.4 
		208.1,391.2 208.1,382.3 205.5,380 209.7,377.1 218.3,377.1 222.4,371.9 220.6,368.8 224.8,364.3 231.8,364.3 229.7,367.2 
		230.8,371.1 233.7,369.8 236.3,367.2 239.9,366.9 243.3,372.7 243.3,377.1 247.2,380.5 247.2,384.9 251.1,388.1 252.7,392 
		252.7,395.9 248.3,400.8 249.3,403.7 252.7,404.2 260,400.1 264.7,398.2 268.6,397.2 271.2,399.3 273.8,403.5 273.8,410.2 
		277,413.6 279.6,417.8 279.6,420.9 282.4,423.3 286.3,424.6 289,425.9 289,430.3 286.6,434.5 281.7,437.1 277.7,434.2 276.4,438.2 
		271.5,442.1 265.7,445.7 261.6,447.3 258.4,449.6 255.6,452.2 253,446.8 244.9,451.5 243,448.6 236.9,453.3 232.1,449.1 230,452.5 
		220.9,453 218.8,457.2 211.7,456.4 205.5,456.4 201.3,452.5 197.4,453 193.5,452.8 	"/>
</g>
<g id="cordoba"  onClick={() =>handleClick('cordoba')}>
	<polygon className="st0" points="289,430.3 289,425.9 286.3,424.6 282.4,423.3 279.6,420.9 279.6,417.8 277,413.6 273.8,410.2 
		273.8,403.5 271.2,399.3 268.6,397.2 264.7,398.2 260,400.1 252.7,404.2 249.3,403.7 248.3,400.8 252.7,395.9 252.7,392 
		251.1,388.1 247.2,384.9 247.2,380.5 243.3,377.1 243.3,372.7 239.9,366.9 242.5,365.6 243,358.1 239.9,353.4 239.9,346.3 
		249.8,340.1 250.9,336.7 261.6,329.9 262.6,325.9 278.8,330.2 278.8,333 289,338.2 297.2,343.7 301.2,349.5 311.4,353.6 
		314.3,356.8 314.3,359.6 317.7,367.5 311.4,375.5 312.2,381.8 310.3,391.5 315.3,394.1 313.2,398 316.3,399.5 317.7,400.1 
		314.3,402.9 320,410.8 320,413.6 325.5,418.6 321.6,419.6 317.7,424.3 313.5,425.1 312.2,432.7 309,435 305.1,429.5 300.4,429.3 
		297.6,432.7 292.9,432.7 	"/>
</g>
<g id="cadiz"  onClick={() =>handleClick('cadiz')} >
	<polyline className="st0" points="193.5,452.8 193.5,459.3 188,464 190.7,471 195.6,472.6 199.7,478.3 199.7,488 203.7,493.5 
		207,496.1 210.2,503.6 215.9,503.6 223.5,510.9 230.3,512.2 233.7,516.3 243.6,512.2 243.6,505.5 248.3,506.2 249.8,502.1 
		253,496.1 250.1,495.3 248.8,489 243.6,480.4 239.9,480.2 242.3,475.2 245.1,473.6 248.8,471.8 251.7,467.6 253,464.2 250.1,460.8 
		254.5,455.6 259.2,459.3 264.2,455.4 261.6,447.3 258.4,449.6 255.6,452.2 253,446.8 244.9,451.5 243,448.6 236.9,453.3 
		232.1,449.1 230,452.5 220.9,453 218.8,457.2 211.7,456.4 205.5,456.4 201.3,452.5 197.4,453 193.5,452.8 	"/>
</g>
<g id="malaga"  onClick={() =>handleClick('malaga')}  >
	<path className="st0" d="M253,496.1l-2.9-0.8l-1.3-6.3l-5.2-8.6l-3.7-0.3l2.3-5l2.9-1.6l3.7-1.8l2.9-4.2l1.3-3.4l-2.9-3.4l4.4-5.2
		l4.7,3.7l5-3.9l-2.6-8.1l6.8-3.2l4.6-3.2l3.5-2.7l1.3-3.9l3.9,2.9l5-2.6l2.3-4.2l3.9,2.3h4.8l2.8-3.4l4.7,0.3l3.9,5.5l1.3,5.2v6.5
		l5.5,4.4l4.4,0.5l3.1,3.7l6.5,1.8l5.2,2.1l3.9,3.4v3.9l-5.2-1.6c0,0-3.1,1.8-3.9,1.8c-0.8,0-8.9-0.8-8.9-0.8l-4.7,2.1l-15.1-0.5
		l-4,9.7l-5.9,1.3l-1.8,2.9l-5.7,2.6l-6.5-2.6l-5,1.5l-5.5,2.3h-2.6l-8.3,5.5L253,496.1z"/>
</g>
<g id="almeria"  onClick={() =>handleClick('almeria')}>
	<polygon className="st0" points="375,466.6 375,462.7 378.2,461.6 380.8,459.3 379.7,454.6 383.9,450.9 382.3,442.8 385.5,442.8 
		386.8,440 389.4,435 391.5,429.3 401.9,435 401.9,429.3 403.2,421.1 409.7,415.7 415.2,412.3 418.1,412.6 417,404.5 421.5,404 
		420.2,399.8 422.3,394.3 422.3,389.1 422.5,387 425.9,383.9 429.6,385.2 439,387.8 437.7,398.8 440,406.1 444.4,413.6 447.6,417.3 
		452.3,417.3 458.8,421.7 452.8,428.2 449.4,432.9 447.8,440 446,445.7 442.9,450.4 439,455.6 438.4,459.3 436.1,462.7 433,465 
		431.4,466.6 429,467.9 423,461.1 418.3,459.3 414.7,461.1 412.3,459.3 406.6,461.4 404,466.6 400.6,470.2 394.3,470.2 389.4,468.7 
		387,466.3 382.1,466.8 	"/>
</g>
<g id="jaen"  onClick={() =>handleClick('jaen')}>
	<polygon className="st0" points="325.5,418.6 320,413.6 320,410.8 314.3,402.9 317.7,400.1 316.3,399.5 313.2,398 315.3,394.1 
		310.3,391.5 312.2,381.8 311.4,375.5 317.7,367.5 314.3,359.6 314.3,356.8 311.4,353.6 313.2,350.2 317.9,351.8 325.5,352.6 
		328.9,351.8 331.7,353.1 334.9,352.3 339,348.9 345.3,350 350,350.8 357.6,350.8 365.4,344.8 375,347.9 378.7,344.8 388.6,347.1 
		394.1,342.2 402.2,343.5 405,343.7 406.1,349.2 410.3,350.8 410.3,357.8 412.6,358.3 412.6,364.3 407.7,371.4 407.1,373.2 
		404.5,375 404.5,378.9 396.7,381.5 392.8,388.1 388.6,400.3 382.3,405.8 376.6,407.1 373,403.7 368,403.7 365.1,408.2 360.4,409.5 
		354.2,405.8 347.7,410.8 339,415.7 334.9,422.2 327.3,420.9 	"/>
</g>
<g id="granada"  onClick={() =>handleClick('huelva')}>
	<polygon className="st0" points="339,466.6 339,462.7 335.1,459.3 329.9,457.2 323.4,455.4 320.3,451.7 315.8,451.2 310.3,446.8 
		310.3,440.2 309,435 311.8,432.9 313.5,425.1 317.7,424.3 321.6,419.6 325.5,418.6 327.3,420.9 330.2,421.1 334.9,422.2 339,415.7 
		347.7,410.8 354.2,405.8 360.4,409.5 365.1,408.2 368,403.7 373,403.7 376.6,407.1 382.3,405.8 388.6,400.3 392.8,388.1 
		396.7,381.5 404.5,378.9 404.5,375 407.1,373.2 413.1,375.3 416,377.4 422.3,378.4 425.9,383.9 422.5,387 422.3,389.1 422.3,394.3 
		420.2,399.8 421.5,404 417,404.5 418.1,412.6 415.2,412.3 409.7,415.7 403.2,421.1 401.9,429.3 401.9,435 391.5,429.3 389.4,435 
		386.8,440 385.5,442.8 382.3,442.8 383.9,450.9 379.7,454.6 380.8,459.3 378.2,461.6 375,462.7 375,466.6 368.5,466.6 364.3,466.6 
		357.8,470.2 345.8,466.3 341.7,468.2 	"/>
</g>
    </SvgIcon>
  );
}
