import './formItem.scss';
import React from 'react';

const FormItem = (props) => {
    if(props.htmlType == 'Input'){
        switch(props.inputType){
            case 'password':
                return(
                    <div key={`form${props.label}`} className="form_item_block">
                        <label htmlFor={props.type}>{props.label}:</label>
                        <input id={props.type} key={`form${props.label}`} type="password"/>
                    </div>
                )

            case 'email':
                return(
                    <div key={`form${props.label}`} className="form_item_block">
                        <label htmlFor={props.type}>{props.label}:</label>
                        <input id={props.type} type="email"/>
                    </div>
                )
                
            default:
                if(props.type == 'title'){
                    return(
                        <div key={`form${props.label}`} className="form_item_block">
                            <label htmlFor={props.type}>{props.label}:</label>
                            <input id={props.type} key={`form${props.label}`} ref={props.titleRef} type="text"/>
                        </div>
                    )  
                }
                else if(props.type == 'text'){
                    return(
                        <div key={`form${props.label}`} className="form_item_block">
                            <label htmlFor={props.type}>{props.label}:</label>
                            <input id={props.type} key={`form${props.label}`} ref={props.textRef} type="text"/>
                        </div>
                    )  
                }
                else {
                    return(
                        <div key={`form${props.label}`} className="form_item_block">
                            <label htmlFor={props.type}>{props.label}:</label>
                            <input id={props.type} key={`form${props.label}`} type="text"/>
                        </div>
                    )  
                }
                
        }
    }
    else if(props.htmlType == 'Select'){
        let answerOptionsFunction = props.answerOptions.map((option, index) => {
            return <option key={`answer${index}`} value={option.value}>{(option.text)}</option>
        });
        if(props.type == 'theme'){
            return(
                <div key={`form${props.label}`} className="form_item_block">
                    <label htmlFor={props.type}>{props.label}:</label>
                    <select id={props.type} ref={props.themeRef} key={`form${props.label}`}>
                        {answerOptionsFunction}
                    </select>
                </div>
            )  
        }
        return(
            <div key={`form${props.label}`} className="form_item_block">
                <label htmlFor={props.type}>{props.label}:</label>
                <select id={props.type}>
                    {answerOptionsFunction}
                </select>
            </div>
        )
    }
    
};

export default FormItem;