function Search({ setSearch, search }) {
  return (
    <div className="mb-3">
      <input onChange={(e) => setSearch(e.target.value)} value={search} type='text' placeholder='Search a character...' className='form-control rounded-0'></input>
    </div>
  )
}

export default Search;