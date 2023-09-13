import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function FrontPage() {
    
    return(
        <>
        <div></div>
        <div className="johnEverything">
            <Navbar />
            <div className="frontTitle">
                <h1 className="johnH1">SVG</h1>
                <h2 className="johnP">Recipies from: 
                    <ul className="johnUl">
                        <li className="johnLi">Sonia</li>
                        <li className="johnLi">Vaishali</li>
                        <li className="johnLi">Gianni</li>
                    </ul>
                </h2>
                <button className="johnButton" href="johnAwesomeRecipies">Start Cookin'</button>
            </div>
        </div>
        <div id="johnAwesomeRecipies" className="johnRecipies">
            <div id="johnRecipe" className="johnGreek">
                <Link>
                    <h2 className="johnNameG">Greek Recipies</h2>
                </Link>
            </div>
            <div id="johnRecipe" className="johnSlovak">
                <Link>
                    <h2 className="johnNameS">Slovak Recipies</h2>
                </Link>
            </div>
            <div id="johnRecipe" className="johnIndian">
                <Link>
                    <h2 className="johnNameI">Indian Recipies</h2>
                </Link>
            </div>
        </div>  
        </>
    )
}