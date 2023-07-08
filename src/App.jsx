import { useState } from "react"
import ImagesGrid from "./components/ImageGrid"
import Modal from "./components/Modal"
import Title from "./components/Title"
import UploadForm from "./components/UploadForm"

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImagesGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  )
}

export default App
