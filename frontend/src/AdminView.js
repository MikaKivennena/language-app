import { useState } from "react";

function AdminView() {

    const [englishWord, setEnglishWord] = useState('');
    const [finnishWord, setFinnishWord] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const task = {englishWord, finnishWord, category };

      fetch('http://localhost:3010/vocabulary', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
      },window.location.reload(false))
    }

    return (
      <div className="adminview">
        <h2>Add a new word paird to database</h2>
        <form onSubmit={handleSubmit}>
          <label>english word</label><br/>
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
          <label>category</label><br/>
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
    );
}

export default AdminView;