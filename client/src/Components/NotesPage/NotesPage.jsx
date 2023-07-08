//import стилей
import './notes_page.scss';

import React from 'react';
import {useRef} from 'react';

//import компонентов
import Section from '../Common/Section/Sectiom';
import NotesList from './NotesList/NotesList';
import Form from './Form/Form';
import Button from './Button/Button';

import {getTimeAndDate} from '../Common/Time/time'

let formElements = [
    {
        htmlType:'Input',
        type:'title',
        label:'Title',
    },
    {
        htmlType:'Input',
        type:'text',
        label:'Text',
    },
    {
        htmlType:'Select',
        type:'theme',
        label:'Theme',
        answerOptions:[
            {
                value:'black',
                text:'Black'
            },
            {
                value:'white',
                text:'White'
            },
            {
                value:'darkslategray',
                text:'Dark-slate-gray'
            },
            {
                value:'lightyellow',
                text:'Light-yellow'
            }
        ]
    }
];

//function componet
const NotesPage = (props) => {
    const refs = {
        btnRef: useRef(null),
        textRef: useRef(null),
        titleRef: useRef(null),
        themeRef: useRef(null)
    }
    
    const createNote = () => {
        let dateAndTime = getTimeAndDate();
        props.addNote(refs.titleRef.current.value, refs.textRef.current.value, dateAndTime, refs.themeRef.current.value);
        refs.titleRef.current.value = '';
        refs.textRef.current.value = '';
    }

    const delNote = (id) => {
        props.delNote(id);
    }

    const editNote = (id, type, newAspect) => {
        switch (type) {
            case 'headline': {
                console.log(props.notes[id].hOnEdit)
                if(props.notes[id].hOnEdit){
                    let dateAndTime = getTimeAndDate();
                    props.editNote(id, newAspect, type, dateAndTime);
                    break;
                }
                else if(!props.notes[id].hOnEdit){
                    props.updateStatus(id, 'headline');
                    break;
                }
            }
            case 'paragraph': {
                if(props.notes[id].pOnEdit){
                    let dateAndTime = getTimeAndDate();
                    props.editNote(id, newAspect, type, dateAndTime);
                    break;
                }
                else if(!props.notes[id].pOnEdit){
                    props.updateStatus(id, 'paragraph');
                    break;
                }
            }
            default:
                alert("зачем");
                break;
            
        }
    }

    return(
        <main>
            <Section classForSection='notes_section' key='notes' content={
                <NotesList editNote={editNote} delNote={delNote} notes={props.notes}/>
            }/>
            <Section classForSection='form_section' key='form' content={[
                <Form 
                    titleRef={refs.titleRef}
                    textRef={refs.textRef}
                    themeRef={refs.themeRef}
                    formElements={formElements}
                />,
                <Button createNote={createNote} btnRef={refs.btnRef} btnClass="create_note" btnText="Create Note"/>
            ]}/>
        </main>
    )
};

export default NotesPage;