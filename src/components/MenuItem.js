import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.



const MenuItem = ({ title, imageName, menuDesc, itemPrice, totalprice, settotalprice, count, setCount}) => {

    // const [count, setCount] = useState(0);
    const decrementHandler = () =>{
        if(count > 0){
            setCount(count -1);
            settotalprice(totalprice -=  itemPrice)
        }
    };
    
    console.log("Image path:", imageName);
    return (
        <div class="itemrow">
            <img src={imageName} alt= "Corresponding Picture" class="menuImg"/>
            <div class="details">
                <h3 class="itemName">{title}</h3>
                <p>{menuDesc}</p>
                <div class="priceandbutton">
                    <p class="price">{itemPrice}</p>
                    <button onClick={decrementHandler}  class="addbutton">-</button>
                    <p class = "quantity">{count}</p>
                    <button onClick={() => [setCount(count+1), settotalprice(totalprice += itemPrice)]} class="addbutton">+</button>
                </div>
            </div>
        </div>
    );
};



export default MenuItem;