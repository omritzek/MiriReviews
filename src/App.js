import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as texts from './texts.json';

export class App extends React.Component{
  state = {
    movie: '',
    review: ['','','']
  }

  openFbPopUp = ()=> {
    var sharerURL = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + encodeURI('שלום שמי חגי');
    window.open(
      sharerURL,
      'facebook-share-dialog', 
      'width=626,height=436'); 
    return  false;
  }

  GenerateReview=(e)=>{
    const intros = texts[0];
    const middles = texts[1];
    const endings = texts[2];
    const introInd = Math.floor(Math.random()*intros.length);
    const middleInd = Math.floor(Math.random()*middles.length);
    const endingInd = Math.floor(Math.random()*endings.length);
  
    const tempReview = [intros[introInd].replace('{0}',this.state.movie),
                        middles[middleInd].replace('{0}',this.state.movie),
                        endings[endingInd].replace('{0}',this.state.movie)]
    e.preventDefault();
    this.setState({review: tempReview})
  }

  onInputSubmit=(e)=>{
    this.setState({movie:e.target.value})
  }

  render() {
    return (
      <div className="App">
            <header>
              <h1>מחולל הביקורות האוטומטי</h1>
              <p>בחרו סרט ששרת התרבות מירי רגב תבקר, בלי לצפות בו פעם אחת!</p>
            </header>
            <div>
              <form>
                <input id='movieName' type="text" placeholder="שם הסרט" value={this.state.movie} onChange={this.onInputSubmit}></input>
                <button onClick={this.GenerateReview}>צור ביקורת</button>
              </form>
            </div>
            {this.state.review[0] !== '' && 
            <div className="Review">
              <img className="MiriPic" src="./profilepic.png"/>
              <div className="WrittenReview">
                <div>
                  {this.state.review[0]}
                </div>
                <div>
                  {this.state.review[1]}
                </div>
                <div>
                  {this.state.review[2]}
                </div>
                <a href=""><button onClick={this.openFbPopUp}>שתפו בפייסבוק</button></a>
              </div>
            </div>}
            <footer>בקרו אותנו בפייסבוק בעמוד <a href='https://www.facebook.com/mirimovies/'>מירי רגב מבקרת סרטים</a></footer>
      </div>
    );
  }
}

export default App;
