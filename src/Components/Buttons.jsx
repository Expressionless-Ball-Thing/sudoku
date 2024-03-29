import React from 'react';

function Buttons(props) {
    let clearinputs;
    if (props.template !== false) {
        clearinputs = <button className="button clear" onClick={props.clearinputs}>Clear Inputs</button>
    }
    return (
        <div className='Buttonspace'>
            <div>
                <button className="button reset" onClick={props.reset}>Reset Grid</button>
            </div>
            <div>
                {clearinputs}
            </div>
            <div>
                <button className="button solve" onClick={props.solve}>Solve</button>
            </div>

            <div>
                <button className="button random" onClick={props.random}>Random</button>
            </div>
        </div>
    )
}

export default Buttons;