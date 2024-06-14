import { useState } from "react"
import useShowToast from "./useShowToast"

const usePreviewiImg = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const showToast = useShowToast()
  const maxFileSizeInBytes = 5 * 1024 * 1024

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File must be less than 5MB", "error")
        setSelectedFile(null)
        return;
      }
      const reader = new FileReader()

      reader.onloadend = () => {
        setSelectedFile(reader.result)
      }

      reader.readAsDataURL(file)
    }
    else {
      showToast("Error", "File must be an image", "error")
      setSelectedFile(null)
    }
  }

  return { selectedFile, handleImageChange, setSelectedFile }
}

export default usePreviewiImg