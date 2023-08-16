import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const header_title = 'WEB'

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]

  const article_data = {
    title:'welcome', body:'Hi, WEB'
  }

  return (
    <div>
      <Header title={header_title}></Header>
      <Nav topics={topics}></Nav>
      <Article title={article_data.title} body={article_data.body}></Article>
    </div>
  );
}

export default App;
