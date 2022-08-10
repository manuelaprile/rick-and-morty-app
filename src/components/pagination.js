function Pagination(props) {

  return (
    <>
      <div className='row align-items-center justify-content-center justify-content-md-normal mb-5 text-center text-md-end'>
        <div className='col-md-6 text-start'>
          {
            props.page <= 0 ? (
              ''
            )
              : (
                <p className='text-light'>Page: {props.page}</p>
              )
          }
          {
            props.page == props.totalpages ? (
              <p className='text-light'>No more pages...</p>
            )
              : (
                ''
              )
          }
        </div>
        <div className='col-md-6 text-end flex-nowrap mt-md-0 mt-5'>
          {
            props.page <= 0 ? (
              ''
            )
              : (
                <button onClick={() => props.setPage(props.page - 1)} className='btn btn-primary mx-3 rounded-0'>Previous Page</button>
              )
          }
          {
            props.page == props.totalpages ? (
              ''
            )
              : (
                <button onClick={() => props.setPage(props.page + 1)} className='btn btn-primary rounded-0'>Next Page</button>
              )
          }
        </div>
      </div>
    </>
  )
}

export default Pagination
