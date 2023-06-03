import React,{Component} from "react";
import Navigation from "./Navigation";


  export default class Card extends Component {



    render (){
        //nội dung của component sẽ chứa trong return của phương thức render
        return <div className="card">
            <Navigation/>
            <img src="https://i.pravatar.cc?u=8" alt="..." />
            <div className="card-body">
                 <h3>Name: Quan Mentor</h3>
                 <p>Age: 40</p>
            </div>
        </div>
    }
}