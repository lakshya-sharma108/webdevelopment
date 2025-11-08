
// Card Practice: 

// function Card() {
//     return (
//         <div>
//             <img src="https://imgs.search.brave.com/B_yAIlIHnfzK_wtsVraML1fnbCEJR58zK2K1HZitMuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/NDY5LzUwNi9zbWFs/bC9tb2Rlcm4td2ly/ZWxlc3MtaGVhZHBo/b25lcy13aXRoLWJs/YWNrLWVhcmN1cHMt/YW5kLWEtd2hpdGUt/aGVhZGJhbmQtcmVz/dC1vbi1hLXdoaXRl/LXRhYmxlLXBob3Rv/LmpwZWc" alt="" width="300" />
//             <h2>Next Gen Headphone</h2>
//             <p>Rs. 12000</p>
//         </div>
//     )
// }











// Props Practice:

// 1. Passing props in components parameter scope
// 2. Consoling the value of props 


// function Card(props) {

//     // props value console -- it will give you a object of child components data
//     console.log(props);

//     // Consoling props objects values
//     console.log(props.image);
//     console.log(props.title);
//     console.log(props.price);

//     return (
//         // Passing props values -- always provide js value inside component then use -> {}
//         <div>
//             <img src={props.image} alt="" width="250" />
//             <h2>{props.title}</h2>
//             <p>Rs. {props.price}</p>
//         </div>
//     )
// }








// CSS Practice:

// For External Css -> E:\web development\29ReactJs\About-React\5-Css-in-react.txt

// Inline Css -> React accept inline css in the form of object --> {{ yourCss }}
// Syntax ->  style={{ yourCss }}   <-- Always use camelCase

// function Card(props) {

//     return (
//         <div id="Card" className="CardClass" style={{backgroundColor: "black", padding: "20px", color: "white" }}>
//             <img src={props.image} alt="" width="250" />
//             <h2>{props.title}</h2>
//             <p>Rs. {props.price}</p>
//         </div>
//     )
// }







// Storing CSS in a object:

// Single Css in a object
const styles = {
    backgroundColor: "rgb(253, 244, 232)", 
    padding: "20px", 
    color: "black",
    borderRadius : "15px",
    boxShadow : "#bababa 1px 1px 7px",
    textAlign : "center"
}

function Card(props) {

    return (
        <div id="Card" className="CardClass" style={styles}>
            <img src={props.image} alt="" width="250" />
            <h2>{props.title}</h2>
            <p>Rs. {props.price}</p>
        </div>
    )
}


export default Card;