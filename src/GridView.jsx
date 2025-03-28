import React from "react"
import "./GridView.css"
const GridView = () => {
    let students =[
        
            {
              name: "Ram",
              phone: "+1234567890",
              age: 20,
              content: "Computer Science student at RVS Engineering College",
              cgpa: 8.5,
            },
            {
              name: "Abishek",
              phone: "+1987654321",
              age: 21,
              content:
                "Electronics and Communication student at RVS Engineering College",
              cgpa: 8.8,
            },
            {
              name: "Pradeep",
              phone: "+1122334455",
              age: 22,
              content: "Mechanical Engineering student at RVS Engineering College",
              cgpa: 7.9,
            },
            {
              name: "Praba",
              phone: "+1555666777",
              age: 20,
              content: "Civil Engineering student at RVS Engineering College",
              cgpa: 8.2,
            },
            {
              name: "Kalai",
              phone: "+1444333222",
              age: 23,
              content: "Information Technology student at RVS Engineering College",
              cgpa: 9.0,
            },
            {
              name: "Bousik",
              phone: "+1666777888",
              age: 21,
              content:
                "Electrical and Electronics Engineering student at RVS Engineering College",
              cgpa: 8.7,
            },
            {
              name: "Gokul",
              phone: "+1777888999",
              age: 22,
              content: "Computer Science student at RVS Engineering College",
              cgpa: 8.4,
            },
            {
              name: "Srihari",
              phone: "+1888999000",
              age: 20,
              content: "Biomedical Engineering student at RVS Engineering College",
              cgpa: 8.6,
            },
            {
              name: "Tharun",
              phone: "+1999000111",
              age: 23,
              content: "Automobile Engineering student at RVS Engineering College",
              cgpa: 7.8,
            },
            {
              name: "Vicky",
              phone: "+1222111333",
              age: 21,
              content:
                "Artificial Intelligence and Data Science student at RVS Engineering College",
              cgpa: 9.1,
            },
          
    ];
    return (
        <div className="grid-view">
        {students.map((students,index)=>(
            <div className="student" key={index}>
            <h2>{students.name}</h2>
            <div>Phone:{students.phone}</div>
            <div>Age:{students.age}</div>
            <p>Content:{students.content}</p>
            <div>CGPA:{students.cgpa}</div>
</div>
        ))}
        </div>
    )
}
export default GridView;