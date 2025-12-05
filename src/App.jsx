import { useState, useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    fetchData()
  }, [])

  const url = 'https://retoolapi.dev/yEtUV8/data'
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
      console.log(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  

  const fetchPost = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'New Item', value: 123 }),
      })
      const result = await response.json()
      console.log('Post Result:', result)
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  const fetchPut = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Updated Item', value: 456 }),
      })
      const result = await response.json()
      console.log('Put Result:', result)
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  const fetchDelete = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        console.log(`Item with id ${id} deleted successfully`)
      } else {
        console.error('Error deleting data')
      }
    } catch (error) {
      console.error('Error deleting data:', error)
    }
  }

  


  

  return (
    <>
    <h1>fetching so hard rn</h1>
      <button>get data</button>
      <button>post data</button>
      <button>put data</button>
      <button>delete data</button>
    </>
  )
}

export default App
