import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CharacterInfo() {
  const [character, setCharacter] = useState(null);
  const params = useParams();
  const getDataCharacter = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    console.log(data)
    setCharacter(data);
  }
  useEffect(() => {
    getDataCharacter(params.id, setCharacter)
  }, [])
  return (
    <>
      {character !== null ? (
        <div className='container'>
        <h1 className='text-center py-5 text-light'>{character.name}</h1>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-6'>
              <div className='row g-0'>
                <div className='col-md-6'>
                  <div>
                    <img className='w-100 border-left-radius fit-img' src={character.image} alt={character.name}></img>
                  </div>
                </div>
                <div className='col-md-6 bg-detail border-right-radius'>
                  <div style={{ 'margin': '20px' }}>
                    <h4 className='text-light'>Name: {character.name}</h4>
                    <h5 className='text-light'>Origin: {character.origin.name}</h5>
                    <h5 className='text-light'>Location: {character.location.name}</h5>
                    <h5 className='text-light'>Specie: {character.species}</h5>
                    <h5 className='text-light'>Status: {character.status}</h5>
                    <h5 className='text-light'>Gender: {character.gender}</h5>
                    <h5 className='text-light'>Episodes: {character.episode.length}</h5>
                    <div>
                      <Link to={{
                        pathname: `/`,
                      }}>
                        <Button variant="primary w-100 rounded-0" className='mt-3'>Back to list</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : <h1 className='text-light text-center'>Character loading...</h1>}
    </>
  )
}

export default CharacterInfo
