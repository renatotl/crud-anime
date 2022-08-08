

const animes = require("../mocks/animes");
const AnimeEntity = require("../entities/anime.entity");
const CharacterEntity = require("../entities/character.entity");

function findAllAnimes() {
  return animes;
}

function findAnimeById(id) {
  let animeFinded;

  animes.map((anime) => {
    if (anime.id === id) {
      animeFinded = anime;
    }
  });
  return animeFinded;
}

function createAnime(anime) {
  const newAnime = new AnimeEntity(anime);
  newAnime.validate();

  if (!anime.characters) {
    throw new Error("Personagens precisam ser informados");
  }

  const newCharacters = [];

  anime.characters.map((character) => {
    const newCharacter = new CharacterEntity(character);
    newCharacter.validate();
    newCharacters.push(newCharacter.getCharacter());
  });

  const newAnimeValidated = {
    ...newAnime.getAnime(),
    characters: newCharacters,
  };

  animes.push(newAnimeValidated);
  return newAnimeValidated;
}

function updateAnime(anime) {
  const updateAnime = new AnimeEntity(anime);
  updateAnime.validate();

  if (!anime.characters) {
    throw new Error("Personagens precisam ser informados");
  }

  const updatedCharacters = [];

  anime.characters.map((character) => {
    const updatedCharacter = new CharacterEntity(character);
    updatedCharacter.validate();
    updatedCharacters.push(updatedCharacter.getCharacter());
  });

  const updatedAnime = {
    ...updateAnime.getAnime(),
    characters: updatedCharacters,
  };

  animes.map((eachAnime, index) => {
    if (eachAnime.id === updateAnime.id) {
      animes.splice(index, 1, updatedAnime);
    }
  });

  return updatedAnime;
}

function deleteAnime(id) {
  let animeFinded;
  console.log("lista: ", animes);
  animes.map((anime, index) => {
    if (anime.id === id) {
      animeFinded = anime;
      animes.splice(index, 1);
    }
  });

  return animeFinded;
}

module.exports = {
  findAllAnimes,
  findAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
};