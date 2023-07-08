import NotesPage from "./NotesPage";
import { connect } from "react-redux";
import { addNoteAC, delNoteAC, editNoteAC, updateStatusAC } from "../../redux/reducers/notesReducer";

const mapStateToProps = (state) => ({
    notes: state.notesPage.notes,
    countNotes: state.notesPage.countNotes,
});

const mapDispatchToProps = ({
    addNote: addNoteAC,
    delNote: delNoteAC,
    editNote: editNoteAC,
    updateStatus: updateStatusAC
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage)