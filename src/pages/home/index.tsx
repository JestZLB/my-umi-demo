import React, { FC, useEffect, useState } from "react";
import { request, useSelector } from "umi";
import api from "mock/api";
import "./index.less"



const Home :React.FC<{}> = ()=>{
    const testText = useSelector((state:any) => state.system.myname);
    const [testData,setTestData] = useState<any>('');
    const testRequest = async () =>{
        let data = null
        try {
            data =  await request('/api/home')
            setTestData(data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        testRequest();
    },[])

    console.log(testData);
    return (

        <>
            <div className="p-2">{testText}</div>
        </>

    )
}

export default Home