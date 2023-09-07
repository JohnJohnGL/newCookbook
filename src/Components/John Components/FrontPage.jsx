import Navbar from "./Navbar";

export default function FrontPage() {
    return(
        <>
        <div className="johnEverything">
            <Navbar />
            <div className="frontTitle">
                <h1 className="johnH1">SVG Cookbook</h1>
                <h2 className="johnP">Recipies from: 
                    <ul className="johnUl">
                        <li className="johnLi">Sonia</li>
                        <li className="johnLi">Vaishali</li>
                        <li className="johnLi">Gianni</li>
                    </ul>
                </h2>
                <button className="johnButton">Start Cookin'</button>
            </div>
        </div>
        </>
    )
}