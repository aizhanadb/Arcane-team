import React from 'react';

const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

class Typer extends React.Component {

  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPING_SPEED
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED
    });

    if (!isDeleting && text === fullText) {     
      setTimeout(() => this.setState({ isDeleting: true }), 500);   
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });      
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <h1 className='main-container-dynamic-text'> {this.state.text}
      </h1>
    );
  }
}

export default Typer;



// import React, { useEffect } from 'react';
// import { useState } from 'react';

// const TYPING_SPEED = 150;
// const DELETING_SPEED = 30;

// const Typer = ({dataText}) => {
//     const [text, setText] = useState('');
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [loopNum, setLoopNum] = useState(0);
//     const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

//     useEffect(() => {
//         const handleType = () => {
//             const i = loopNum % dataText.length;
//             const fullText = dataText[i];
    
//             setText( isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
//             setTypingSpeed( isDeleting ? DELETING_SPEED : TYPING_SPEED)
    
//             if(!isDeleting && text === fullText) {
//                 setTimeout(() => setIsDeleting(true), 100);
//             }else if(isDeleting && text === '') {
//                 setIsDeleting(false);
//                 setLoopNum(loopNum + 1)
//             }
    
//             setTimeout(handleType, typingSpeed);
//         }
//         handleType()
//     },[])

    
//   return (
//     <>
//         <h1 className='main-container-dynamic-text'>
//             {text}
//         </h1>
//     </>
//   )
// }

// export default Typer