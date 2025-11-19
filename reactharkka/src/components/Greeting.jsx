import PropTypes from 'prop-types';

const Greeting = ({name, age, isTeacher}) => {
  return (
    <p>
      Hei {name}, ikäsi on {age}
      {isTeacher && 'Ja olet opettaja.'}
    </p>
  );
};


//kevyt tyyppitarkASTUS

Greeting.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isTeacher: PropTypes.bool,
};

export default Greeting