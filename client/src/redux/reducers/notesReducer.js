const ADD_NOTE = "ADD-NOTE";
const DELETE_NOTE = "DELETE-NOTE";
const UPDATE_NOTESTATUS = "UPDATE-NOTESTATUS";
const EDIT_NOTE = "EDIT-NOTE";

let initialState = {
    notes: [
        {
            id: 0,
            title: 'Do homework',
            hOnEdit: false,
            hInput: '',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum quam exercitationem enim. Nam rerum magni incidunt itaque nulla. Soluta.',
            pOnEdit: false,
            pInput: '',
            time: '15:34 | 12.03.2023',
            theme: 'black'
        },
        {
            id: 1,
            title: 'Dig potatoes',
            hOnEdit: false,
            hInput: '',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint.',
            pOnEdit: false,
            pInput: '',
            time: '13:10 | 25.03.2023',
            theme: 'white'
        },
        {
            id: 2,
            title: 'To water flowers',
            hOnEdit: false,
            hInput: '',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ullam asperiores neque enim nihil, iusto recusandae! Consequuntur doloremque architecto fuga provident repellendus cumque asperiores harum nesciunt quasi eos facilis perferendis quibusdam at quo ratione, maxime veniam. Asperiores id neque impedit dicta minus ullam molestias reiciendis voluptas. Similique, animi assumenda? Rerum fuga temporibus voluptates in, aliquid nisi.',
            pOnEdit: false,
            pInput: '',
            time: '20:46 | 02.03.2023',
            theme: 'lightyellow'
        },
        {
            id: 3,
            title: 'Do site',
            hOnEdit: false,
            hInput: '',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore praesentium earum error tempore id quo sequi eius, veniam cupiditate dicta aliquam at harum veritatis sint optio modi temporibus hic minima excepturi voluptatum reiciendis mollitia doloribus provident! Harum inventore, vel fugit quisquam fuga asperiores deserunt adipisci, iste accusamus deleniti aperiam provident non maiores, voluptas temporibus ipsa. Nobis obcaecati officia, iste tenetur expedita quasi similique, aliquam architecto, aperiam deleniti illum ipsa inventore asperiores. Omnis sequi alias optio eum aliquam ex pariatur, enim perferendis ducimus? Hic quod vel ipsa accusamus error laudantium, natus nulla culpa ratione, qui dignissimos sed laboriosam, aliquam voluptatum sit. Eum deserunt nam rem ex voluptates adipisci, magnam, quo in corporis culpa distinctio qui accusamus dicta eaque alias omnis itaque, dolore corrupti esse maiores aut quas temporibus non. Molestias doloremque ipsum vero est labore, qui corrupti quidem vel odit eos placeat expedita reprehenderit quae ipsam rem optio possimus non, obcaecati laboriosam. Possimus rem voluptates sed consequuntur totam cum illum, eligendi exercitationem quibusdam est, saepe ab, modi id velit beatae quae! Accusantium magni minus assumenda fuga error cumque reprehenderit odit consequatur illum qui, harum commodi maiores! Excepturi, fugiat laborum corporis minus, totam nihil earum amet reprehenderit ad aliquam voluptatem magnam animi!',
            pOnEdit: false,
            pInput: '',
            time: '18:52 | 01.04.2023',
            theme: 'darkslategray'
        }
    ],
    countNotes: 4,
    newNote: {
        id: null,
        title: '',
        hOnEdit: false,
        hInput: '',
        text: '',
        pOnEdit: false,
        pInput: '',
        time: '',
        theme: ''
    }
}

const addNote = (state) => {
    return {
        ...state,
        notes: [
            ...state.notes,
            {
                ...state.newNote
            }
        ],
        countNotes: ++state.countNotes,
        newNote: {
            id: null,
            title: '',
            hOnEdit: false,
            hInput: '',
            text: '',
            pOnEdit: false,
            pInput: '',
            time: '',
            theme: ''
        }
    }
}

const delNote = (state, id) => {
    let newNotes = state.notes.filter(note => note.id != id)

    return {
        ...state,
        notes: [
            ...newNotes
        ],
        countNotes: --state.countNotes,
    }
}

const editNote = (state, newAspect, time, id, type) => {
    let editedNotes = [
        ...state.notes
    ];
    switch (type) {
        case 'headline': {
            editedNotes[id] = {
                ...editedNotes[id],
                title: newAspect,
                time: time,
                hOnEdit: false
            }
            break;
        }
        case 'paragraph': {
            editedNotes[id] = {
                ...editedNotes[id],
                text: newAspect,
                time: time,
                pOnEdit: false
            }
            break;
        }
        default: {
            console.log('invalid type');
            break;
        }
    }
    return {
        ...state,
        notes: [
            ...editedNotes
        ],
    }
}

const updateStatus = (state, id, type) => {
    let editedStatusNotes = [
        ...state.notes
    ];
    switch (type) {
        case 'headline': {
            editedStatusNotes[id].hOnEdit = true; 
            break;
        }
        case 'paragraph': {
            editedStatusNotes[id].pOnEdit = true; 
            break
        }
        default: {
            console.log('invalid type');
            break;
        }
    }
    return {
        ...state,
        notes: [
            ...editedStatusNotes
        ],
    }
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            state.newNote = {
                ...state.newNote,
                id: state.notes[state.notes.length - 1].id + 1,
                title: action.title,
                text: action.text,
                time: action.time,
                theme: action.theme
            };
            return addNote(state);
        }

        case DELETE_NOTE: {
            return delNote(state, action.id);
        }

        case UPDATE_NOTESTATUS: {
            return updateStatus(state, action.id, action.editingType);
        }

        case EDIT_NOTE: {
            return editNote(state, action.newAspect, action.time, action.id, action.editingType);
        }

        default: {
            return state;
        }
    }
}

export const addNoteAC = (title, text, time, theme) => ({
    type: ADD_NOTE,
    title: title,
    text: text,
    time: time,
    theme: theme
});

export const delNoteAC = (id) => ({
    type: DELETE_NOTE,
    id: id
});

export const editNoteAC = (id, newAspect, editingType, time) => ({
    type: EDIT_NOTE,
    id: id,
    newAspect: newAspect,
    editingType: editingType,
    time: time
});

export const updateStatusAC = (id, editingType) => ({
    type: UPDATE_NOTESTATUS,
    id: id,
    editingType: editingType
});