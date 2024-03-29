import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddPlaces = () => {
    const navigate = useNavigate()
    const [photoLink, setPhotoLink] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
      const {
          register,
          handleSubmit,
          formState: { errors },
      } = useForm();
      
    const addPlace = async (data) => {
        const placeData = {
            title: data.title,
            address: data.address,
            photos: addedPhotos,
            description: data.description,
            perks: data.perks,
            extraInfo: data.extraInfo,
            checkIn: data.checkIn,
            checkOut: data.checkOut,
            maxGuests: data.maxGuest,
        }
       
        const res = await axios.post('/add-place', placeData);

        if (res.status === 200) {
            navigate('/')
        }
        
      }
    
    const addLink = async(e) => {
      e.preventDefault()
      const { data: fileName } = await axios.post('upload-by-link', { photoLink });
      setAddedPhotos(prev => {
        return [...prev, fileName]
      })
    setPhotoLink('')
    }
  
    const uploadFile = async (e) => {
      e.preventDefault();
      console.log(e.target.files);
      const data = new FormData();
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        data.append('photos', files[i]);
      }
  
      const {data:fileNames} = await axios.post('/upload-photo', data, {
        headers: { 'Content-Type': 'multipart/form-data'}
      })
      setAddedPhotos(prev => {
        return [...prev, ...fileNames]
      })
  
    }
    return (
        <div>
        <form onSubmit={handleSubmit(addPlace)}>
          <h2 className="text-2xl mt-4">Title</h2>
          <p className="text-gray-500 text-sm">
            Ttile for your place should be short and catchy as in
            advertisement
          </p>
          <input type="text" placeholder="title, for example: Mortlake" {...register("title")} />
          <h2 className="text-2xl mt-4">Address</h2>
          <p className="text-gray-500 text-sm">Address of the place</p>
          <input type="text" placeholder="address" {...register("address")} />
          <h2 className="text-2xl mt-4">Photos</h2>
          <p className="text-gray-500 text-sm">The More The Better</p>
          <div className="flex gap-2">
                        <input type="text" placeholder="Add using Link" value={photoLink}  onChange={(e)=>setPhotoLink(e.target.value)}  />
            <button onClick={addLink} className="bg-gray-200 px-4 rounded-xl">
              Add&nbsp;Photo
            </button>
          </div>
          <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {addedPhotos.length > 0 && addedPhotos.map(link =>
              <div>
                <img className="rounded-2xl" src={`http://192.168.0.102:4000/uploads/${link}`} alt="" />
              </div>
              )}
            <label className="flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
              <input type="file" multiple className="hidden" onChange={uploadFile}/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Upload
            </label>
          </div>
          <h2 className="text-2xl mt-4">Description</h2>
          <p className="text-gray-500 text-sm">
            Tell everyone briefly about your place
          </p>
          <textarea name="" id="" cols="30" rows="10" {...register("description")}></textarea>

          <h2 className="text-2xl mt-4">Perks</h2>
          <p className="text-gray-500 text-sm">Select all the perks</p>
          <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <input value="Free wifi" type="checkbox" {...register("perks")}  />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>

              <span>Free Wifi</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <input type="checkbox" value="Pets Care" {...register("perks")} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>

              <span>Pets Care</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <input type="checkbox" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <span>TV</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <input type="checkbox" value="Free Parking Spot" {...register("perks")} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <span>Free Parking Spot</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
              <input type="checkbox" value="Private Entrance" {...register("perks")} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                />
              </svg>

              <span>Private Entrance</span>
            </label>
          </div>

          <h2 className="text-2xl mt-4">Extra Info</h2>
          <p className="text-gray-500 text-sm">
            Do you have any extra to let us know?
          </p>
                    <textarea name="" id="" cols="30" rows="10" {...register("extraInfo")}></textarea>
                    
          <h2 className="text-2xl mt-4">Check in&out times, max guests</h2>
                    <p className="text-gray-500 text-sm">add check in and out times, remember to have some time window for cleaning room between guest</p>
                    <div className="grid gap-2 sm:grid-cols-3">
                        <div>
                            <h3 className="mt-2 -mb-2">Check In Times</h3>
                            <input type="time" name="" placeholder="14:00" {...register("checkIn")} />
                       </div>
                        <div>
                            <h3 className="mt-2 -mb-2">Check Out Times</h3>
                        <input type="time" name="" id="" placeholder="14:00" {...register("checkOut")} />
                       </div>
                        <div>
                            <h3 className="mt-2 -mb-2">Max Numbers of guests</h3>
                            <input type="number" name="" id="" {...register("maxGuest")} />
                       </div>
                    </div>
                    <div>
                        <input className="bg-primary text-white my-4" type="submit" value="Save"/>
                    </div>
        </form>
      </div>
    );
};

export default AddPlaces;