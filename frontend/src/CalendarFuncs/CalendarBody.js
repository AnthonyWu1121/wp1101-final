import { Calendar, Button } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

export default ({teamName}) => {
    const [selectedDays, setSelectedDays] = useState([])
    useEffect(() => {
        console.log(selectedDays);
    }, [selectedDays]); 
    return(
    <>
        <Calendar 
            fullscreen={false} 
            onSelect={(e)=>{
                let curr = [e.year(),e.month(),e.date()];
                let found = false, index = -1;
                for(let i=0;i<selectedDays.length;i++){
                    if(selectedDays[i][0] === curr[0] && selectedDays[i][1] === curr[1] && selectedDays[i][2] === curr[2]){
                        found = true;
                        index = i;
                    }
                }
                if(found){
                    setSelectedDays([...selectedDays.slice(0,index), ...selectedDays.slice(index+1)])
                }
                else{
                    setSelectedDays([...selectedDays,curr]);
                }
                }}
            disabledDate={(time) => {
                return time < moment().subtract(1,"days");
            }}
            dateFullCellRender={(e) => {
                for(let i=0;i<selectedDays.length;i++){
                    if(e.year() === selectedDays[i][0] && e.month() === selectedDays[i][1] && e.date() === selectedDays[i][2]){
                        return(
                            <div style={{height: "auto", width: "auto"}}><div style={{height: "auto", width: "55%", margin: "auto", borderRadius: "2px", backgroundColor: "#1890ff", color:"white"}}>{e.date()>=10?e.date():"0"+e.date()}</div></div>
                        )
                    }
                }
                return(<div style={{height: "auto", width: "auto", backgroundColor: "transparent"}}>{e.date()>=10?e.date():"0"+e.date()}</div>)
            }}
        ></Calendar>
        <Button disabled={selectedDays.length === 0?true:false}>儲存登記結果</Button>
    </>
    )
}