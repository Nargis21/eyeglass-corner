import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questions'>
            <div className="question-1">
                <h1>How React Works?</h1>
                <h3>React works with a Virtual Dom. Virtual dom carry a virtual copy of real dom. It compare the changes of application with real dom using diff algorithm. Then Identify the changes and render it on real dom. This process provide better performance of an application.</h3>
            </div>
            <div className="question-2">
                <h1>What is the different between Props and State?</h1>
                <h3>Props used to pass data one component to another component as a parameter.It is read only and it can not be modified.Otherhand State is used to manage changing data in an application.State change is depends on user interaction.State cannot be pass on component to another component.</h3>
            </div>
            <div className="question-3">
                <h1>How UseState Works?</h1>
                <h3>UseState is a react hook which used to manage changing of a application. UseState returns a variable and a funtion called setState. The state of a application store in this variable. When we need to change state, set it by setState function. Then useState store this changes in the variable. </h3>
            </div>
        </div>
    );
};

export default Question;