import React, {Component} from "react";
import './Navigation.css';



class Navigation extends Component{
    render(){
        return(
            <div>
                <nav class="stroke">
                    <ul>
                        <li><a href="#">Earthquake</a></li>
                        <li><a href="#">Wild fires</a></li>
                        <li><a href="#">Heat waves</a></li>
                        
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default Navigation;