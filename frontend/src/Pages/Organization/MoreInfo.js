import React, { useState } from 'react';
import "../../Styles/MoreInfo.css";
function MoreInfo(){
    return(
        <div className='main-container'>
            <h1> More About You !!</h1>
            <div className='form-section'>
                <div> 
                    <p> Experiance: </p>
                    <button> Beginner </button>
                    <button> Intermediate </button>
                    <button> Expert </button>
                </div>
                <div>
                    <p> Edition: </p>
                    <button> 5e </button>
                    <button> 3.5e </button>
                    <button> 1e </button>
                </div>
                <div>
                    <p>Group Size: </p>
                    <button> Small</button>
                    <button> Medium </button>
                    <button> Large</button>
                </div>
                <div> 
                    <p> Language: </p>
                    
                    <select name="language" id="language">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Bangla">Bangla</option>
                    </select>
                </div>

                <div> 
                    <p> Location: </p>
                    <select name="location" id="location">
                        <option value="Calgary">Calgary</option>
                        <option value="Vancouver">Vancouver</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Montreal">Montreal</option>
                    </select>
                </div>
            </div>


        </div>
    )
}




export default MoreInfo;