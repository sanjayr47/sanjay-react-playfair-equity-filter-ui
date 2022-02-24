import React from 'react'
import { useState } from "react"
import './Pie.css';

export default function Pie(){
    
    return (
        <>
        <div class="container">
            <div class="donut-chart-block block"> 
                    <div class="donut-chart">
                        <div id="part1" class="portion-block"><div class="circlem"></div></div>
                        <div id="part2" class="portion-block"><div class="circlem"></div></div>
                        <div id="part3" class="portion-block"><div class="circlem"></div></div>
                        <p class="center"></p>        
                    </div>
            </div>
        </div>
        </>
    );
}