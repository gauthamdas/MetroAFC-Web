import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { getToken } from '../Utils/Common';
import './travelledger.css';

function Travelledger() {
    const [data, setData] = useState(false);
    // const [recom, setRecom] = useState({call:false, msg: ""})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_HOST}/journeys/all`, {token: getToken()})
        .then(response => {
            console.log(response.data.journeys)
            setLoading(false)
            setData(response?.data?.journeys)
            Anim()
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
            setData([])
            Anim()
        })
    }, [])

const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(e.target.age.value)
    // console.log(e.target.q1.value)
    // console.log(e.target.q2.value)
    // console.log(e.target.q3.value)
    setLoading(true);
    axios.post(`${process.env.REACT_APP_HOST}/users/answers`,{token: getToken(), age: e.target.age.value, q1: e.target.q1.value, q2: e.target.q2.value, q3: e.target.q3.value})
    .then((res)=>{
        console.log(res.data.recom);
        // setRecom({call: true, msg: res.data.recom});
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error?.response?.data);
    })
}

    const Anim = () => {
        function animateDiv(myclass) {
            var newq = makeNewPosition();
            // console.log(newq)
            // document.querySelector(myclass).animate([
            //     // keyframes
            //     { transform: `translate(${-newq[1]}px, ${newq[0]}px)` },
            //     { transform: `translate(${newq[0]}px, ${newq[1]}px)` }
            // ], {
            //     // timing options
            //     duration: 5000,
            //     composite: {
            //         add : {

            //         }
            //     }
            // });
            document.querySelector(myclass).animate([
                // keyframes
                { transform: `translate(${newq[0]}%,${newq[1]}%)` },
                // { transform: `translate(${newq[2]}%,${Math.log(newq[2])}%)` },
                // { transform: `translateY(${newq[1]+newq[0]}%)` },
                // { transform: `translate(${newq[2]}px, ${0}px)` },
                // { transform: `translate(${newq[2]}%,${Math.sin(newq[2])}%)` },
                { transform: `translateY(${newq[1]}%)` },
                { transform: `translateX(${newq[0]}%)` },
                // { transform: `translate(${newq[1]/2}px, ${newq[1]/2}px)` },
                // { transform: `translate(${newq[1]*1.5}px, ${0}px)` },
                // { transform: `translate(${newq[0]}px, ${newq[1]}px)` },
                // { transform: `translate(${newq[1]}px, ${0}px)` },
                { transform: `translate(${newq[1]}%,${newq[0]}%)` },
            ], {
                // timing options
                duration: 10000,
                fill: 'forwards',
                // composite: {
                //     add : 
                //          "transform: `translate(${newq[2]}%,${Math.sin(newq[2])}%)` "
                // },
                iterations: Infinity
            });
          }
        animateDiv(".a");
        animateDiv(".b");
        animateDiv(".c");
        animateDiv(".d");
        animateDiv(".e");
        animateDiv(".f");
        animateDiv(".g");
        animateDiv(".h");
        animateDiv(".i");
        animateDiv(".j");
    }
    


  
  function makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    var h = window.innerHeight  ;
    var w = window.innerWidth  ;
    
    var nh1 = Math.floor(Math.random() * h);
    var nw1 = Math.floor(Math.random() * w);
  
    return [nh1, nw1, w];
    // return [w, h,w];
  }


  
  

  

if (loading) {
    return <div className="loadclass"><span className="loader-11"></span></div>;
  }

  return (
    <div className='dash'>
    <h1 className='subtitle'>Travel Ledger</h1>
    <div className="full-background">
            <div className='shape1 a'></div>
            <div className='shape1 b'></div>
            <div className='shape1 c'></div>
            <div className='shape1 d'></div>
            <div className='shape1 e'></div>
            <div className='shape1 f'></div>
            <div className='shape1 g'></div>
            <div className='shape1 h'></div>
            <div className='shape1 i'></div>
            <div className='shape1 j'></div>
        </div>
    <div className="glass-container ledger-table">
        
        <div className="options">

        <select name="perpage" id="perpage">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
        </div>
    <table className="table">
        <thead >
            <tr className='trow thead'>
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">FROM</th>
                <th scope="col">TO</th>
                <th scope="col">Fare</th>
                <th scope="col">Time</th>
            </tr>
        </thead>
        <tbody>
            <tr className='trow'>
                {data && Object.values(data[0]).map((item, index) => {
                    return <td key={index}>{item}</td>
                })}
            </tr>
            <tr className='trow'>
            {data && Object.values(data[1]).map((item, index) => {
                    return <td key={index}>{item}</td>
                })}
            </tr>
            

        </tbody>
    </table>
    </div>
    </div>
  )
}

export default Travelledger;