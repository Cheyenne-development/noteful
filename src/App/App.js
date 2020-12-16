import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoteListNav from '../NoteListNav/NoteListNav'
import NotePageNav from '../NotePageNav/NotePageNav'
import NoteListMain from '../NoteListMain/NoteListMain'
import NotePageMain from '../NotePageMain/NotePageMain'
import AddFolder from '../AddFolder/AddFolder'
import AddNote from '../AddNote/AddNote'
import ApiContext from '../ApiContext'
import config from '../config'
import './App.css'
import NotefulErrors from '../NotefulErrors'

class App extends Component {
  state = {
    notes: [],
    folders: [],
    newFolder: {
      hasError: true,
      touched: false,
      name: '',
    },
    newNote: {
      name: {
        touched: false,
        value: '',
      },
      folderId: {
        touched: false,
        value: '',
      },
      content: {
        touched: false,
        value: '',
      },
    },
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e))
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e))

        return Promise.all([
          notesRes.json(),
          foldersRes.json()])
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  updateNewFolderName = name => {
    if (name === undefined) {
      this.setState({
        newFolder: {
          hasError: true,
          touched: true,
          name: '',
        },
      })
    } else if (name.length < 4) {
      this.setState({
        newFolder: {
          hasError: true,
          touched: true,
          name: name,
        },
      })
    } else {
      this.setState({
        newFolder: {
          hasError: false,
          touched: true,
          name: name,
        },
      })
    }
  }

  updateBadSubmitData = () => {
    console.log(this.state.newNote)
    const nameValue = this.state.newNote.name.value
    const contentValue = this.state.newNote.content.value
    this.setState({
      ...this.state.newNote,
      newNote: {
        name: {
          touched: true,
          value: nameValue
        },
        content: {
          touched: true,
          value: contentValue
        }
      }


    })
    console.log(this.state.newNote)
  }

  updateNewNoteData = (input, value) => {
    console.log(this.state.newNote.name.value)
    console.log(this.state.newNote.content.value)
    console.log(value.length)
    this.setState({
      newNote: {
        ...this.state.newNote,
        [input]: {
          touched: true,
          value: value,
        },
      },
    })
    console.log(this.state.newNote)
  }

  handleAddFolder = newFolder => {
    console.log(newFolder)
    this.setState({
      folders: [...this.state.folders, newFolder],
      newFolder: {
        hasError: true,
        touched: false,
        name: "",
      }
    })
  }

  handleAddNote = note => {

    this.setState({
      notes: [...this.state.notes, note],
      newNote: {
        name: {
          touched: false,
          
        },
        content: {
          touched: false,
          
        }
      }


    })

    console.log(this.state.newNote)
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId),
    })

  }

  renderNavRoutes() {
    return (
      <>
        <Route path="/note/:noteId" component={NotePageNav} />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
        {['/', '/folder/:folderId'].map(path => (
          <Route exact key={path} path={path} component={NoteListNav} />
        ))}
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        <Route path="/note/:noteId" component={NotePageMain} />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-note" component={AddNote} />
        {['/', '/folder/:folderId'].map(path =>
          <Route exact key={path} path={path} component={NoteListMain} />
        )}
      </>
    )
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      newFolder: this.state.newFolder,
      updateNewFolderName: this.updateNewFolderName,
      newNote: this.state.newNote,
      handleAddNote: this.handleAddNote,
      updateNewNoteData: this.updateNewNoteData,
      updateBadSubmitData: this.updateBadSubmitData
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <NotefulErrors>
            <nav className="App__nav">{this.renderNavRoutes()}</nav>
            <header className="App__header">
              <h1>
                <Link to="/">Noteful</Link>{' '}
                <FontAwesomeIcon icon="check-double" />
              </h1>
            </header>
            <main className="App__main">{this.renderMainRoutes()}</main>
          </NotefulErrors>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App