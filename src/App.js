import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as texts from './texts.json';
import {FacebookShareButton, FacebookIcon} from 'react-share';

export class App extends React.Component{
  state = {
    movie: '',
    review: ['','','']
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
              <h1>🎬 מחולל הביקורות האוטומטי 🎬</h1>
              <p>בחרו סרט ששרת התרבות מירי רגב תבקר, בלי לצפות בו פעם אחת!</p>
            </header>
            <div>
              <form>
                <input id='movieName' type="text" placeholder="שם הסרט" value={this.state.movie} onChange={this.onInputSubmit}></input>
                {this.state.movie !=='' && <button onClick={this.GenerateReview}>מה יש למירי להגיד על {this.state.movie}?</button>}
              </form>
            </div>
            <div className={this.state.review[0] !== '' ? "Review" : "hidden-review"}>
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
                  <FacebookShareButton className='shareBox' hashtag ='#מירי_רגב_מבקרת_סרטים' quote={this.state.review[0]+'\n'+this.state.review[1]+'\n'+this.state.review[2]} url='https://mirireviews.surge.sh' ><FacebookIcon className='fbIcon' size='20px' />שתפו שכל העולם ידע</FacebookShareButton>
              </div>
            </div>
            <footer>בקרו אותנו בפייסבוק בעמוד <a href='https://www.facebook.com/mirimovies/'>מירי רגב מבקרת סרטים</a></footer>
      </div>
    );
  }
}

export default App;
