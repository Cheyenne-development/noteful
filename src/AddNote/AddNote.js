import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import ApiContext from '../ApiContext'
import config from '../config'


export default class AddNote extends React.Component {
    static defaultProps = {
        history: {
          push: () => { }
        },
      }
    static contextType = ApiContext
  
    addNewNote = note => {
    
        note.modified = new Date(note.modified);
    
        fetch(`${config.API_ENDPOINT}/notes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(note),
        })
          .then(res => {
            console.log(JSON.stringify(note))
            return res.json()
          })
          .then(resJSON => this.context.handleAddNote(resJSON))
      }
      parseFolders = () => {
        return this.context.folders.map(folder => (
          <option key={folder.id} name={folder.id} value={folder.id}>
            {folder.name}
          </option>
        ))
      }
    
      handleSubmit = e => {
        e.preventDefault(e)
        const newNote = {
          name: e.target['note-name'].value,
          content: e.target['note-content'].value,
          folderId: e.target.folder.value,
          modified: new Date(),
        }
        console.log(newNote);
        this.addNewNote(newNote)
        this.props.history.push('/');
      }
    
      validateName = () => {
        if (this.context.newNote.name.value.length === 0) {
          return 'Name is required'
        }
      }
    
      validateDescription = () => {
        if (this.context.newNote.content.value.length === 0) {
          return 'Description is required'
        }
      }
  render() {
    
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='note-name'>
              Name
            {this.context.newNote.name.touched && <p>{this.validateName()}</p>}
          </label>
          <input type='text' id='note-name' name='note-name' 
            aria-required="true"
            aria-label="Name"
            onChange={e =>
              this.context.updateNewNoteData(e.target.name, e.target.value)
            }
          />
          </div>
          <div className='field'>
          <label htmlFor="content">
            Description
            {this.context.newNote.content.touched && (
              <p>{this.validateDescription()}</p>
            )}
          </label>
          <textarea id='note-content' name='note-content'
            aria-required="true"
            aria-label="Description"
            onChange={e =>
              this.context.updateNewNoteData(e.target.name, e.target.value)
            }
          />
          </div>
          <div className='field'>
          <label htmlFor="folder-select">Select a Folder</label>
          <select
            id="note-folder"
            name="folder"
            aria-required="true"
            aria-label="Select a folder"
          >
            {this.parseFolders()}
          </select>
          </div>
          <div className='buttons'>
          <button type="submit">Submit</button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}