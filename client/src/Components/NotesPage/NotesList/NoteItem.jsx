import s from "./NoteItem.module.scss";
import { useState } from 'react';
let themeClass;

const NoteItem = (props) => {
    switch (props.theme) {
        case 'black':
            themeClass = s.black_theme_for_note;
            break;

        case 'white':
            themeClass = s.white_theme_for_note;
            break;
        
        case 'darkslategray':
            themeClass = s.darkslategray_theme_for_note;
            break;

        case 'lightyellow':
            themeClass = s.lightyellow_theme_for_note;
            break;

        default:
            themeClass = '';
    }

    const [newHInput, setNewHInput] = useState(props.hInput);
    const [newPInput, setNewPInput] = useState(props.pInput);

    const editBtns = (editingType, isEdited, editingFunction) => {
        switch (editingType) {
            case 'headline': {
                console.log(isEdited);
                if(isEdited){
                    return (
                        <div className={s.headline_and_edit}>
                            <input onChange={(e)=>{
                                setNewHInput(e.target.value)
                            }} type="text" className={s.input}/>
                            <button onClick={()=> {
                                editingFunction(props.id, editingType, newHInput)
                            }} className={s.edit_btn}>save</button>
                        </div>
                    )
                }
                else if(!isEdited){
                    return (
                        <div className={s.headline_and_edit}>
                            <h2 className={s.note_headline}>{props.title}</h2>
                            <button onClick={()=>{
                                editingFunction(props.id, editingType, newHInput)
                            }} className={s.edit_btn}>edit</button>
                        </div>
                    )
                }
                break;
            }
            case 'paragraph': {
                if(isEdited){
                    return (
                        <div className={s.paragraph_and_edit}>
                            <textarea onChange={(e)=>{
                                setNewPInput(e.target.value);
                            }} name="" className={s.textarea} cols="30" rows="10"></textarea>
                            <button onClick={()=>{
                                editingFunction(props.id, editingType, newPInput)
                            }} className={s.edit_btn}>save</button>
                        </div>
                    )
                }
                else if(!isEdited){
                    return (
                        <div className={s.paragraph_and_edit}>
                            <p className={s.note_content}>{props.text}</p>
                            <button onClick={()=>{
                                editingFunction(props.id, editingType, newPInput)
                            }} className={s.edit_btn}>edit</button>
                        </div>
                    )
                }
            }
            default: 
                console.log("зачем");
                break;
            
        }
    }

    return(
        <li className={`${s.notes_list_item} ${themeClass}`}>
            {editBtns('headline', props.hOnEdit, props.editNote)}
            <article className={s.note_and_time}>
                {editBtns('paragraph', props.pOnEdit, props.editNote)}
                <p className={s.time_were_note_was_created}>
                    {props.time}
                </p>
            </article>
            <button onClick={()=>{props.delNote(props.id)}} className={s.delete_btn}>Delete</button>
        </li>
    )
};

export default NoteItem;