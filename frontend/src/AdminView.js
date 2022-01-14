import { useState, useEffect } from "react";
import "./AdminView.css";

function AdminView() {
    /**Set states for three required inputs for new word pairs to be saved into database */
    const [englishWord, setEnglishWord] = useState('');
    const [finnishWord, setFinnishWord] = useState('');
    const [category, setCategory] = useState('');

  const url = "/vocabulary";
  const[wordsArray, setWordsArray] = useState([]);
  /**Immediately fetches words from database and parses them into a wordArray */
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => setWordsArray(res))
    .catch(err => console.log(err));
  },);
    /**This makes the button submit the given info to database */
    const handleSubmit = (e) => {
      e.preventDefault();
      const task = {englishWord, finnishWord, category };

      fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
      },window.location.reload(false))
    }
    /**Makes the delete button actually delete stuff */
    const handleClick = (thisid) => {
      fetch(url + '/' + thisid, {
          method: 'DELETE'
      }, window.location.reload(false))
  }

    return (
      /**These divs could be simplifed by dividing the app to few more components.*/
      <div className="adminview">
        <div className="admincont">
        <div classname="addWord">
        <h2>Add a new word pair to database</h2>
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
      /**Create multiple tables with wordpairs so it's easier to distinghuish which word is english and which one is finnish.
       * Probably not the best solution, but I thought it worked well at the time.
       */
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
              <td><button className="deleteButton" onClick={() => handleClick(word.id)}>X</button></td>
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