import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Character from './detail'
import Pagination from './pagination'
import Search from './search'


function CharactersList() {

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${search}`);
    const data = await response.json();
    setCharacter(data.results);
    setLoading(false);
    setTotalPages(data.info.pages);
  }

  useEffect(() => {
    getData();
  }, [page, search])

  return (
    <>
      <div className='container'>
        <Search setSearch={setSearch} search={search} />
        <div className='row justify-content-center'>
          {
            loading ? (
              <Spinner animation="border" role="status" className='text-light'>
                <span className="visually-hidden">Loading...</span>
              </Spinner>) :
              (
                <div className='row'>
                  {
                    !character ? (
                      <div>
                        <h1 className='text-light text-center mt-5'>Character not found...</h1>
                      </div>
                    ) : (
                      character.map(character => {
                        return (
                          <Character key={character.id} character={character} />
                        )
                      })
                    )
                  }
                </div>
              )
          }
          {
            !character ? (
              ''
            ) : (
              <Pagination page={page} setPage={setPage} totalpages={totalpages} />
            )
          }
        </div>
      </div>
    </>
  )
}


export default CharactersList