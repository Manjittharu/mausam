export const div=(c,d)=>c/d;
export const mul=(a,b)=>a*b;
const square = (a)=>a*a;
export default square;


//pratice question

async function fetchuser(){
    try{
        let response= await fetch("https://dummyjson.com/products");
        if(!response.ok) throw new Error("network response was not ok");
        let data=await response.json();
        let results= data.products;
        results.forEach(product=> {
            console.log("title:",product.title,"price:",product.price,"stock:",product.stock)
            console.log("description:",product.description)
            console.log("catogorey:",product.category)
        });
            
    }
    catch (error) {
        console.log("fetch error",error);
    }
}
fetchuser();