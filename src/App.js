import React,{ useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards.js';
import useStyles from './styles.js';



const alanKey = '1e385a2b0d7d74189268fc90f4cfa2b82e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    

    const [newArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    const classes = useStyles();

    useEffect(() => {
       
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles, number }) => {
                if (command === "newHeadlines") {

                    setNewsArticles(articles);
                    setActiveArticle(-1);

                } else if (command ==="highlight") {
                    
                    setActiveArticle(preactiveArticle => preactiveArticle + 1 )
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber-1];
          
                    if (parsedNumber > articles.length) {
                      alanBtn().playText('Please try that again...');
                    } else if (article) {
                      window.open(article.url,'_blank');
                      alanBtn().playText('Opening...');
                    } else {
                      alanBtn().playText('Please try that again...');
                    }
                  }
            }
        });

    }, [])

 return (
     <div>
         
         <div className={classes.logoContainer}>
            
         <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
         
         </div>

         <NewsCards articles={newArticles} activeArticle={activeArticle} />
         
         <p><center>created by pranit</center></p>
     </div>
     
    )
}

export default App
