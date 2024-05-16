'use client'
import React, { BaseSyntheticEvent, useState } from "react"

export default function Upload() {

  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [takenOn, setTakenOn] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: BaseSyntheticEvent) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    if (!file || (type !== 'photo' && type !== 'video')) {
      console.log('File required. Type must be photo or video')
      return
    }
    setUploading(true)
    const formData = new FormData();
    formData.append('file', file)
    formData.append('type', type)
    formData.append('title', title)
    formData.append('taken_on', takenOn)
    try {
      const response = await fetch('/api/s3-upload-post', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      setUploading(false)
    } catch (error) {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 py-6 text-black">
      <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
        <h1 className="text-xl pl-2 border-0 border-b-2 border-black">Create a post</h1>
        <input type='file' className="bg-white p-2" onChange={handleFileChange} />
        <input type="text" placeholder="Title" className="pl-2 py-2"
          value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Taken on" className="pl-2 py-2"
          value={takenOn} onChange={e => setTakenOn(e.target.value)} />
        <input type="text" placeholder="Type" className="pl-2 py-2"
          value={type} onChange={e => setType(e.target.value)} />
        <button type="submit" className="bg-black text-white p-2">
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  )
}