import { Link, useNavigate } from "react-router"


const AlbumItem = ({image,name,desc,id}) => {
  const navigate = useNavigate();
  return (
    <Link to={`/dashboard/album/${id}`} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] text-white'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>

    </Link>
  )
}

export default AlbumItem