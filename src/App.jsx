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
        body: JSON.stringify({ "Lakohely" : 'Mongólia, Jurta', "Munkakor" : 'Lovász', "TeljesNev" : 'Altantsetseg'}),
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
        body: JSON.stringify({ "Lakohely" : 'Ott', "Munkakor" : 'Ez', "TeljesNev" : 'Az' }),
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
      <button onClick={fetchData}>get data</button>
      <button onClick={fetchPost}>post data</button>
      <button onClick={() => fetchPut[12]}>put data</button>
      <button onClick={() => fetchDelete[34]}>delete data</button>
    </>
  )
}

export default App
