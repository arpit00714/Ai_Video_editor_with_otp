
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbVideoPlus } from "react-icons/tb";
import "./Fourteen.css";
import { useEffect, useState } from "react";
import { FcEditImage } from "react-icons/fc";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { headerAtom } from "./headerAtom";


const videos = [
  { id: 1, date: "29th April, 2024", title: "Video Title Here" },
  { id: 2, date: "29th April, 2024", title: "Video Title Here" },
  { id: 3, date: "29th April, 2024", title: "Video Title Here" },
  { id: 4, date: "29th April, 2024", title: "Video Title Here" },
  { id: 5, date: "29th April, 2024", title: "Video Title Here" },
  { id: 6, date: "29th April, 2024", title: "Video Title Here" },
  { id: 7, date: "29th April, 2024", title: "Video Title Here" },
  { id: 8, date: "29th April, 2024", title: "Video Title Here" },
];

const Fourteen= () => {
  const setHeaderName = useSetRecoilState(headerAtom);

  useEffect(()=>{
    setHeaderName("Composition")
  },[])

  return (
    <>

      {videos.map(video => (
        <TableItem key={video.id} date={video.date} title={video.title} />
      ))}

      <div className="icons">
        <TbVideoPlus  className="icon1"/>  
        </div>
    </>
  );
}


const TableItem=(props)=>{
  const [option, setOption] = useState(false);
  return(
    <div className="face">
          <img src="images/men3.jpg" alt="Thumbnail" />
          <div className="details">
            <p>{props.date}</p>

            <h3>{props.title}</h3>
          </div>

           <div style={{position:"relative"}}>
          <button className="btn_1" onClick={()=>setOption(!option)}><BsThreeDotsVertical /></button>

           <div className="action_div" style={{display:`${option ? "grid" : "none" } `}}>

                <button style={{border:"none",borderRadius:"8px",display:"flex",justifyContent:"end",
                textAlign:"center",gap:"10px", fontSize:"15px"}}>Edit<p><FcEditImage /></p>
                </button>

                <button style={{border:"none",display:"flex",justifyContent:"end",
                textAlign:"center",gap:"10px", fontSize:"15px"}}>Update<p><GrDocumentUpdate/></p></button>

                <button style={{border:"none",display:"flex",justifyContent:"end",
                textAlign:"center",gap:"10px", fontSize:"15px"}}>Delete<p><MdOutlineDeleteForever/></p></button>
            </div> 
          </div> 
        </div>
  )
}

export default Fourteen;