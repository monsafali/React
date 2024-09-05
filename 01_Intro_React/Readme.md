What is React?
React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.

What is JSX?
javaScript Extension Syntax
it lets us write HTML directly inside Js

Set Up local Environments
creat React-App v/s Vite

npm create vite@latest
npm install
npm run dev





import-Export:
import:
import Title from "./Title.jsx"

Default Export
export default;

name Export

export { Title};
improt {Title} from "./Title.jsx"






Our 1st Compon ent
Compoenent is a reusable & independent piece of code
Generally all component embedding in App.jsx
in App.jsx we return only one Element. if we have mutliple then we merge it into div

By convention each & every component should be written in sepearte file

The Rules of JSX 
1-Return a single root element 
2-Close all the tags 
3-camelCase all most of the things! 


React Fragment
Fragments let you group a list of children without adding extra nodes to the DOM. 
<> write all codes insite here</>


JSX With Curly Braces
 in wherever we used Curly braces it should treat code in javascript


React Compoenent:
whenever we create multiple component we merge them many file into one componet then render it 
for example i create this :
function Product(){
    return (
        <div>
            <h1>Product Title</h1>
            <h3>Product Description</h3>
        </div>
    )
}


in App.jsx i used it like this way
  return  <>

  <Product/>
  <Product/>
  <Product/>

  </>

  so insted of using this way is not best practise we should create separate compoent and render it only one


Styling
In every each componet CSS files writing in sepeartely files
we always give them a same name by conventionally 


Part 2:
React Props:
Props are the information that you pass to a Jsx tag.




Install React Developer Tools










