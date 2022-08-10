import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Character({ character }) {
  return (
    <>
      <Card className='card-style position-relative'>
        <Card.Img variant="top" src={character.image} />
        <Card.Body style={{ background: '#222831' }}>
          <Card.Title className='text-light'>{character.name}</Card.Title>
          <Card.Text className='text-light'>
            {/* <h5 className='text-light d-inline-block'>Location:</h5> {character.location.name} <br />
          <h5 className='text-light d-inline-block'>Origin: </h5> {character.origin.name} */}
            <small>Last Location:</small> <br />
            <h6 className='text-light d-inline-block'>{character.location.name}</h6>
            {
              character.status == 'Alive' ? (
                <div className='bg-success status'>{character.status}</div>
              ) : ''
            }
            {
              character.status == 'Dead' ? (
                <div className='bg-danger status'>{character.status}</div>
              ) : ''
            }

            {
              character.status == 'unknown' ? (
                <div className='bg-gray status'>{character.status}</div>
              ) : ''
            }
          </Card.Text>
          <Button variant="primary w-100 rounded-0">See more</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Character