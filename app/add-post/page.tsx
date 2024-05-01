'use client'
import React, { BaseSyntheticEvent } from "react"

export default function AddPost() {

  const title = 'Title'
  const type = 'Photo'
  const takenOn = 'Today'
  const filePath = 'Example:path'

  async function handleSubmit(event: BaseSyntheticEvent) {
    const body = {
      title,
      type,
      takenOn,
      filePath
    }
    event.preventDefault()
    try {
      const response = await fetch('/api/add-post', {
        method: 'POST',
        body: JSON.stringify(body)
      })
      console.log('THE RESPONSE: ', response)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="pl-20 pt-20">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
        <input placeholder="Title" value="Title" onChange={() => {}} />
        <input placeholder="Type" value="Photo" onChange={() => {}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}