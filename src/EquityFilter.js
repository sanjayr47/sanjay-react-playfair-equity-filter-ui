import React from 'react'
import { useState } from "react"
import './EquityFilter.css';
import Pie from "./Pie";

export default function EquityFilter(){
    const [topic, setTopic] = useState("BITCOIN")
    return (
        <center>
                <br />
                <div className="equity-filter-bg">
                    <h1 className="flow-text"><b id="topic">${topic}</b></h1>
                    <br />
                    <br />

                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel grey lighten-5 z-depth-3" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s3 my-container">
                                        
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" alt="" className="circle responsive-img"/>
                                        <div id="banner">#1</div>
                                        <p id="pts"><b style={{color: 'green'}}>+1K Pts</b></p>
                                    </div>
                                    <div className="col s8" style={{marginLeft: 10}}>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            <img style={{maxWidth:20, marginRight: 10}} src="https://bitcoin.org/img/icons/opengraph.png?1644775669" /><p style={{color:'gray', margin: 0}}>Bitcoin</p>
                                        </div>
                                        
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            To $64,345
                                        </div>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            In 6 Months
                                        </div>
                                        
                                    </div>
                                    
                                    

                                    <div className="col s2">

                                        <i class="material-icons-outlined" style={{color:'green'}}>thumb_up</i>
                                            <p className="flow-text" style={{color:'gray', margin: 0}}>
                                                1K
                                            </p>
                                        
                                    </div>
                                    <div className="col s2">

                                        <i class="material-icons" style={{color:'red'}}>thumb_down</i>
                                            <p className="flow-text" style={{color:'gray', margin: 0}}>
                                                740
                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel grey lighten-5 z-depth-3" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s3 my-container">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" alt="" className="circle responsive-img"/>
                                        <div id="banner">#1</div>
                                    </div>
                                    <div className="col s5" style={{marginLeft: 10}}>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            <img style={{maxWidth:20, marginRight: 10}} src="https://bitcoin.org/img/icons/opengraph.png?1644775669" /><p style={{color:'gray', margin: 0}}>Bitcoin</p>
                                        </div>
                                        
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            To $64,345
                                        </div>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            In 6 Months
                                        </div>
                                        
                                    </div>
                                    <div className="col s4" style={{paddingLeft: 5}}>
                                        <div className="row" style={{margin: 0}}>
                                            <img style={{maxWidth:20, textAlign:'center', marginTop: 0}} src="https://images.emojiterra.com/twitter/v13.1/512px/1f476.png" />
                                        </div>
                                        
                                        <p style={{color:'green', margin: 0}}><b>1K+ Pts</b></p>
                                    </div>
                                    

                                    <div className="col s2">

                                        <i class="material-icons-outlined" style={{color:'green'}}>thumb_up</i>
                                            <p className="flow-text" style={{color:'gray', margin: 0}}>
                                                1K
                                            </p>
                                        
                                    </div>
                                    <div className="col s2">

                                        <i class="material-icons-outlined" style={{color:'red'}}>thumb_down</i>
                                            <p className="flow-text" style={{color:'gray', margin: 0}}>
                                                740
                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel grey lighten-5 z-depth-3" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s3 my-container">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" alt="" className="circle responsive-img"/>
                                        <div id="banner">#1</div>
                                    </div>
                                    <div className="col s4">
                                        <div className="row" style={{margin: 0}}>
                                            <img style={{maxWidth:20, textAlign:'center', marginTop: 0}} src="https://images.emojiterra.com/twitter/v13.1/512px/1f476.png" />
                                        </div>
                                        
                                        <p style={{color:'green', margin: 0}}><b>1K+ Pts</b></p>
                                    </div>
                                    <div className="col s5" style={{marginLeft: 10}}>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            <img style={{maxWidth:20, marginRight: 10}} src="https://bitcoin.org/img/icons/opengraph.png?1644775669" /><p style={{color:'gray', margin: 0}}>Bitcoin</p>
                                        </div>
                                        
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            To $64,345
                                        </div>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            In 6 Months
                                        </div>
                                        
                                    </div>

                                    <div className="col s2">

                                        <i class="material-icons" style={{color:'green'}}>thumb_up</i>
                                            <p className="flow-text" style={{color:'gray', margin: 0}}>
                                                1K
                                            </p>
                                        
                                    </div>
                                    <div className="col s2">

                                        <i class="material-icons-outlined" style={{color:'red'}}>thumb_down</i>
                                            <p className="flow-text" style={{color:'gray', margin: 0}}>
                                                740
                                            </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />





                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel grey lighten-5 z-depth-3" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s3 my-container">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" alt="" className="circle responsive-img"/>
                                        <div id="banner">#1</div>
                                        <p id="pts"><b style={{color: 'green'}}>+1K Pts</b></p>
                                    </div>
                                    <div className="col s8" style={{marginLeft: 10}}>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            <img style={{maxWidth:20, marginRight: 10}} src="https://bitcoin.org/img/icons/opengraph.png?1644775669" /><p style={{color:'gray', margin: 0}}>Bitcoin</p>
                                        </div>
                                        
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            To $64,345
                                        </div>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            In 6 Months
                                        </div>
                                        
                                    </div>
                                    
                                    

                                    <div className="col s5">
                                        <div className="row" style={{maxHeight: 40}}>
                                            <Pie/>
                                        </div>
                                        <div className="row" style={{marginBottom: 0}}>
                                            <p className="col s6" style={{margin: 0, color:'#f22e18', padding: 0}}>250</p>
                                             <p className="col s6" style={{margin: 0, color: 'green', padding: 0}}>1K</p> 
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    
                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel grey lighten-5 z-depth-3" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s3 my-container">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" alt="" className="circle responsive-img"/>
                                        <div id="banner">#1</div>
                                    </div>
                                    <div className="col s5" style={{marginLeft: 10}}>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            <img style={{maxWidth:20, marginRight: 10}} src="https://bitcoin.org/img/icons/opengraph.png?1644775669" /><p style={{color:'gray', margin: 0}}>Bitcoin</p>
                                        </div>
                                        
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            To $64,345
                                        </div>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            In 6 Months
                                        </div>
                                        
                                    </div>
                                    <div className="col s4" style={{paddingLeft: 5}}>
                                        <div className="row" style={{margin: 0}}>
                                            <img style={{maxWidth:20, textAlign:'center', marginTop: 0}} src="https://images.emojiterra.com/twitter/v13.1/512px/1f476.png" />
                                        </div>
                                        
                                        <p style={{color:'green', margin: 0}}><b>1K+ Pts</b></p>
                                    </div>
                                    
                                    <div className="col s5">
                                        <div className="row" style={{maxHeight: 40}}>
                                            <Pie/>
                                        </div>
                                        <div className="row" style={{marginBottom: 0}}>
                                            <p className="col s6" style={{margin: 0, color:'#f22e18', padding: 0}}>250</p>
                                             <p className="col s6" style={{margin: 0, color: 'green', padding: 0}}>1K</p> 
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="user-prediction-card">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <div className="card-panel grey lighten-5 z-depth-3" style={{margin: 20, maxWidth:400, padding:10, borderRadius: 20}}>
                                <div className="row valign-wrapper" style={{margin: 0}}>
                                    
                                    <div className="col s3 my-container">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHC-MZMN2DF3w/profile-displayphoto-shrink_400_400/0/1573566085060?e=1651104000&v=beta&t=dEnyZYJNBderWO6af7QbpV6F0NYIcPptky8ASaJpsDI" alt="" className="circle responsive-img"/>
                                        <div id="banner">#1</div>
                                    </div>
                                    <div className="col s4" style={{paddingLeft: 5}}>
                                        <div className="row" style={{margin: 0}}>
                                            <img style={{maxWidth:20, textAlign:'center', marginTop: 0}} src="https://images.emojiterra.com/twitter/v13.1/512px/1f476.png" />
                                        </div>
                                        
                                        <p style={{color:'green', margin: 0}}><b>1K+ Pts</b></p>
                                    </div>
                                    <div className="col s5" style={{marginLeft: 10}}>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            <img style={{maxWidth:20, marginRight: 10}} src="https://bitcoin.org/img/icons/opengraph.png?1644775669" /><p style={{color:'gray', margin: 0}}>Bitcoin</p>
                                        </div>
                                        
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            To $64,345
                                        </div>
                                        <div className="row valign-wrapper" style={{marginBottom: 4}}>
                                            In 6 Months
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="col s5">
                                        <div className="row" style={{maxHeight: 40}}>
                                            <Pie/>
                                        </div>
                                        <div className="row" style={{marginBottom: 0}}>
                                            <p className="col s6" style={{margin: 0, color:'#f22e18', padding: 0}}>250</p>
                                             <p className="col s6" style={{margin: 0, color: 'green', padding: 0}}>1K</p> 
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                    </div>
                  
                    
                    
                </div>
        </center>
       
        
    );
}