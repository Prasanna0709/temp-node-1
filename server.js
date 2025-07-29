const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Prasanna" },
  { id: 2, name: "Kishore" },
  { id: 3, name: "Kumar" },
  { id: 4, name: "Alice" },
  { id: 5, name: "Bob" }
];

const products = [
  { id: 1, name: "Sugar" },
  { id: 2, name: "Wheat" },
  { id: 3, name: "Milk" },
  { id: 4, name: "Rice" },
  { id: 5, name: "Chocolates" }
];


app.get("/products",(req,res)=>{
    return res.status(200).json({message:"Products fetched successfully!",productsList:products});
})

app.get("/users",(req,res)=>{
    return res.status(200).json({message:"Users fetched successfully !",usersList:users});
})

app.delete("/products/delete/:id",(req,res)=>{
   const id = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found!" });
  }

  products.splice(index, 1); // Remove 1 element at that index

  return res.status(200).json({
    message: `Product with id ${id} deleted successfully!`,
    updatedProducts: products,
  });
})

app.delete("/users/delete/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = users.findIndex(user=>user.id===id);
    if(index === -1 ){
        return res.status(404).json({ message: "User not found!" });
    }

    users.splice(index,1);

    return res.status(200).json({message: `User with id ${id} deleted successfully!`,
    updatedUsers:users,})
})


app.listen(3000,()=>{
    console.log("Server is running on Port 3000 !");
})