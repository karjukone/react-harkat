import PropTypes from 'prop-types';

const Greeting = (props) => {
    console.log(props);
    const {name, age, isTeacher} = props;
    let teacherText = '';
    
    if (isTeacher) {
        teacherText = ' ja olet opettaja';
    }
    else {
        teacherText = ' ja et ole ope ';
    }
  return (
    <main>
        <div>
            Greeting, nimesi on {name} ja ikäsi on {age} 
            {teacherText}
        </div>
    </main>
  );
};

//kevyt tyyppitarkASTUS

Greeting.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isTeacher: PropTypes.bool,
};

export default Greeting