"use client";
import React from "react";
import Button from '@mui/material/Button';
import { Boxes } from "@/components/ui/background-boxes";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import NavbarList from "@/components/navbar";


export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Boxes />
      <div style={{ marginTop: '0px'}}>
        <NavbarList />
      </div>
      <div className="home_body">
        <img src="/auradot-ai.jpeg" style={{width: '100px', height: '100px'}} />  
        <h1 className='app_title'>
            Auradot AI
        </h1>
        <Button 
          onClick={()=> navigate('/contact')}
          style={{width: '300px', height: '60px'}} 
          variant="outlined"
          > Contact Us
        </Button>
      </div> 
    </div>
  );
}
