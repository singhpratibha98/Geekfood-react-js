// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header.js"
import Main from './Components/Main/main.js';
import Footer from './Components/Footer/Footer.js';
import Cards from './Components/Cards/Card.js';

function App() {
  return (
    <div>
    <Header
    logo = "https://flowbite.com/docs/images/logo.svg"
    title = "GeekFoods"
     home = "Home"
     quote = "Quote" 
     resturants = "Resturants"
     foods = "Foods"
     contact = "Contact"
    />

        <Cards 
         cmt = "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding."
        author = "Adam Scott"
        />  
          
        <Cards 
        cmt ="Eat breakfast like a king, lunch like a prince, and dinner like a pauper."
        author = "Adelle Davis"
        />

        <Cards 
        cmt ="We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are."
        author = "Adelle Davis"
        />

        <Cards 
        cmt ="Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet."
        author = "Albert Einstein"
        />

         <Cards 
        cmt ="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth."
        author = "Alice May Brock"
        />

          <Cards 
        cmt = 'Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.'
        author = "Anthelme Brillat-Savarin"
        />

        <Cards 
        cmt ="Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!"
        author = "Calvin Trillin"
        />

        <Cards 
        cmt ="Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean."
        author = ""
        />

        <Cards 
        cmt ="Food is an important part of a balanced diet."
        author = "Saurabh Shrikhande"
        />

         <Cards 
        cmt ="Good food ends with good talk."
        author = ""
        />

          <Cards 
        cmt ="What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease."
        author = ""
        />
    
      <Main 
    data = {[{
      a:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    }  
     ]}
    />
    
    <Footer />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;