import { useState, useEffect } from "react";
import "./AdminView.css";

function AdminView() {

    const [englishWord, setEnglishWord] = useState('');
    const [finnishWord, setFinnishWord] = useState('');
    const [category, setCategory] = useState('');

  const url = "http://localhost:3010/vocabulary"
  const[wordsArray, setWordsArray] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => setWordsArray(res))
    .catch(err => console.log(err));
  },);

    const handleSubmit = (e) => {
      e.preventDefault();
      const task = {englishWord, finnishWord, category };

      fetch('http://localhost:3010/vocabulary', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
      },window.location.reload(false))
    }

    const handleClick = () => {
      fetch('http://localhost:3010/vocabulary' + wordsArray.id, {
          method: 'DELETE'
      })
  }

    return (
      <div className="adminview">
        <div className="admincont">
        <div classname="addWord">
        <h2>Add a new word paird to database</h2>
        <form onSubmit={handleSubmit}>
          <label>English word</label><br/>
          <input
            type="text"
            required
            value={englishWord}
            onChange={(e) => setEnglishWord(e.target.value)}
          />
          <br/>
          <label>Finnish word</label><br/>
          <input
            type="text"
            required
            value={finnishWord}
            onChange={(e) => setFinnishWord(e.target.value)}
          />
          <br/>
          <label>Category</label><br/>
          <input
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br/>
          <button className="addButton" >Add to database</button>
        </form>
        </div>

        <div className="deleteWord">
        {wordsArray.map((word, index) => {   <button onClick={handleClick}>delete</button>
      return (
        <div>
          <table>
            <tr>
              <th>English</th>
              <th>Finnish</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>

            <tr>
              <td>{word.englishWord}</td>
              <td>{word.finnishWord}</td>
              <td>{word.category}</td>
              <td><button className="deleteButton" onClick={handleClick}>X</button></td>
            </tr>
          </table>
        </div>
      )
    })}
 </div>
        </div>
      </div>
    );
}

export default AdminView;