"use client"
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [open, setOpen]=useState(false);
    const [isAuthenticated, setIsAuthenticated]=useState(false);
    useEffect(()=>{
        setIsAuthenticated(getAuthCookie());
    },[])

    const links=[
        {
            name:"Home", href:"/"
        },
        {
            name:"Items", href:"items"
        },
        {
            name:   isAuthenticated?"Add Item": "Login", href:isAuthenticated?"/add-item":"/login"
        }
    ];
    const navVariants={
        hidden:{opacity:0, y:-20},
        visible:{opacity:1, y:20}
    }
    const containerVariants={
        hidden:{opacity:1,y:-10},
        visible:{opacity:1, y:0}
    }
    const itemVariants={
        
    }
  return (
    <nav>

 