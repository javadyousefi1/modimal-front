

const Image = ({image}) => {
    const baseUrl = import.meta.env.VITE_API_URL
    return (
    <img src={baseUrl}/>
  )
}

export default Image