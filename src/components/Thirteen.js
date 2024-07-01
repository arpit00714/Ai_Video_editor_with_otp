
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbVideoPlus } from "react-icons/tb";
import "./Thirteen.css";
import { Link } from "react-router-dom";
import { FcEditImage } from "react-icons/fc";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";

const Thirteen = () => {
      const data = [
        {
          title:"554654",
          date:"apr 20 2024",
          img:"images/img.jpg"
        },
        {
          title:"ghghvgkhvgkvgghv",
          date:"may 18-17",
          img:"images/img.jpg"
        },
        {
          title:"554654",
          date:"apr 20 2024",
          img:"images/img.jpg"
        },
        {
          title:"554654",
          date:"apr 20 2024",
          img:"images/img.jpg"
        },
        {
          title:"554654",
          date:"apr 20 2024",
          img:"images/img.jpg"
        },
        {
          title:"554654",
          date:"apr 20 2024",
          img:"images/img.jpg"
        },
        {
          title:"554654",
          date:"apr 20 2024",
          img:"images/img.jpg"
        },
        {
          title:"554654",
          date:"apr 20 2024",
          img:"images/img.jpg"
        },
      ]
  return (
    <>
      <div className="xzcontainer">

      {data.map((item,idx)=>(
        <TableItem key={idx} title={item.title} date={item.date} img={item.img} />
      ))}

        <div className="xztbvideo">
        <Link to="/fourteen">
          <TbVideoPlus style={{color:"white"}} />
        </Link>
      </div>
      </div>
    </>
  );
};
/////            ---------sub component--------/////
const TableItem=(props)=>{
 const [option, setOption] = useState(false)
  return(
    <div className="xzcomposition">
          <img src={props.img} alt="" />
          <div className="xzmy-div">
            
            <div style={{width:'70%'}} >
              
            <p>{props.date}</p>
            <h3>{props.title}</h3>
            </div>
            <div className="xzthree">
              <h1>
              <button className="xzbtnn_1" onClick={()=>setOption(!option)}><BsThreeDotsVertical />
              </button>
              <div className="xzaction_div" style={{display:`${option ? "grid" : "none" } `}}>

<button style={{border:"none",borderRadius:"8px",display:"flex",justifyContent:"end",
textAlign:"center",gap:"10px", fontSize:"15px"}}>Edit<p><FcEditImage /></p>
</button>

<button style={{border:"none",display:"flex",justifyContent:"end",
textAlign:"center",gap:"10px", fontSize:"15px"}}>Update<p><GrDocumentUpdate/></p></button>

<button style={{border:"none",display:"flex",justifyContent:"end",
textAlign:"center",gap:"10px", fontSize:"15px"}}>Delete<p><MdOutlineDeleteForever/></p></button>
</div> 
              </h1>
            </div>
          </div>
        </div>
  )
}
export default Thirteen;
