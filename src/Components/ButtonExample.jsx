import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import NavScrollExample from './NavScrollExample';

function ButtonExample() {
  return (
    <>
    
    <div className="text-center">
      
      <Button variant="primary">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      </div>
    </>
  );
}

export default ButtonExample;