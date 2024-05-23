import React from "react";
import CreateCharacter from "../CreateCharacter/CreateCharacter";

function Characters({ characters, handleSelectCharacter, handleCreateCharacter, handleDeleteCharacter }) {

  const handleEdit = (character) => {
    // handleEditCharacter(character);
    // navigate('/edit');
  };

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character._id} onClick={() => handleSelectCharacter(character)}>
            {character.name} - {character.class}
            <button onClick={() => handleEdit(character)}>Edit</button>
            <button onClick={() => handleDeleteCharacter(character._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <CreateCharacter handleCreateCharacter={handleCreateCharacter}/>
    </div>
  );
}

export default Characters;
