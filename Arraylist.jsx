import React from 'react'


const Arraylist = () => {
    let contents=['Home','Products','About','Contact','Help']
    // let Students =[
    //     {
    //         id:1,
    //         name:'Aaaa',
    //         age:20,
    //         Skill:'HTML'
    //     },
    //     {
    //         id:2,
    //         name:'Bbbbb',
    //         age:21,
    //         Skill:'CSS'
    //     },
    //     {
    //         id:3,
    //         name:'Cccc',
    //         age:22,
    //         Skill:'JS'
    //     },
    //     {
    //         id:4,
    //         name:'Dddd',
    //         age:23,
    //         Skill:'Angular'
    //     }
    // ]
    // let Studentlists = Students.map(x=> <h4>I'm {x.name} I'm {x.age} years old and I know {x.Skill}</h4> )
    let list = contents.map((x,key) => <h3 key={key}>{x}</h3>)
  return (
    <div>
          {/* <h1> {Studentlists}</h1> */}
          <h3><a href="/">{list}</a></h3>

        {/* {
          contents.map((data,k) =>(
            <ul key={k}> 
              <li>{data}</li>
            </ul>
          ))
        } */}

    </div>
  )
}

export default Arraylist