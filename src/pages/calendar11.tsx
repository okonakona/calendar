import { useState } from "react"


type TYPE ={
    year : number,
    month : number
}

export default function Calendar11 (){
    const [state,setState] = useState<TYPE>({
        year : 2025,
        month : 1
    })
    const week = ["日","月","火","水","木","金","土",]
    const days = [
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
        ["","","","","","","",],
    ]
    const newDay = new Date(`${state.year}-${state.month}-1`)
    const month = newDay.getMonth();
    for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < days[0].length; j++) {
            if (newDay.getDay()===j) {
                if (newDay.getMonth()===month) {
                    const D = `${newDay.getDate()}`
                    newDay.setDate(newDay.getDate()+1)
                    days[i][j]=D;
                }
            }            
        }        
    }
    return(
        <>
        <h1>{state.month}</h1>
        <h2>{state.year}</h2>
        <button
            onClick={()=>{
                if (state.month===1) {
                    setState({
                        ...state,
                        year : state.year-1,
                        month : 12
                    })
                }
                else{
                    setState({
                        ...state,
                        month : state.month-1
                    })
                }
            }}

        >前</button>
        <button
            onClick={()=>{
                if (state.month===12) {
                    setState({
                        ...state,
                        year : state.year+1,
                        month : 1
                    })
                }
                else{
                    setState({
                        ...state,
                        month : state.month+1
                    })
                }
            }}
        >後</button>
        <table>
            <thead>
                <tr>{week.map((week,index) => <td key={index}>{week}</td> )}</tr>
            </thead>
            <tbody>
                {days.map((days,index) => <tr key={index}>{days.map((day,indexD) => <td key={indexD}>{day}</td> )}</tr> )}
            </tbody>
        </table>
        <p>Time : 12分</p>
        </>
    )
}