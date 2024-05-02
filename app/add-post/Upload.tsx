'use client'
import React, { BaseSyntheticEvent, useState } from "react"

export default function S3UploadForm() {

  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('Title')
  const [takenOn, setTakenOn] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: BaseSyntheticEvent) => {
    setFile(e.target.files[0])
  }
  
  const handleClick = async () => {
    if (!file) return
    const formData = new FormData();
    formData.append('file', file)
    formData.append('title', title)
    formData.append('taken_on', 'testDate')
    const response = await fetch('/api/s3-upload', {
      method: 'POST',
      body: formData
    })
    console.log('RESPONSE', response)
    return response
  }

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    if (!file) {
      console.log('FILE IS REQUIRED')
      return
    }
    setUploading(true)
    const formData = new FormData();
    formData.append('file', file)
    formData.append('title', title)
    formData.append('type', "photo")
    formData.append('taken_on', 'testDate')
    try {
      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()
      console.log('response', data)
      setUploading(false)
    } catch (error) {
      console.log('ERROR', error)
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 h-60 text-black">
      <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
        <h1 className="text-xl pl-2 border-0 border-b-2 border-black">Post an image</h1>
        <input type='file' accept="image/*" className="bg-white p-2" 
          onChange={handleFileChange}
        />
        <input type="text" placeholder="Title" className="pl-2 py-2"/>
        <button type="submit" className="bg-black text-white p-2">
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  )

}