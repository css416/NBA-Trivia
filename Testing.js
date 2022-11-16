import { useState, useEffect } from "react";
import { ref, push, set, onValue } from "firebase/database";
import { listAll, ref as StorageRef, getDownloadURL } from "firebase/storage";
import { database, storage } from "./src/firebase";
// import { dataRef } from "./firebase-config";

const Testing = () => {

    const [name,setName] = useState('')
    const [imageList,setImageList] = useState([])

    const imageListRef = StorageRef(storage, "ScoreImages/1/")

    const handleAdd = () => {
        if(name !== "") {
            // dataRef.ref().child("all").push(name)
            const postListRef = ref(database, 'all');
            const newPostRef = push(postListRef);
            set(newPostRef, name);
            setName("");
        }
    }

    //method 1

    // useEffect(() => {
    //     dataRef.ref().child("all").on('value', data => {
    //         const getData = Object.values(data.val());
    //         console.log(getData)
    //     })
    // },[])

    // set image filename
    useEffect(() => {
        const images = ref(database, 'all');
        onValue(images, (d) => {
            const data = Object.values(d.val());
            console.log(data);
          });
    },[])

    // images
    useEffect(() => {
        listAll(imageListRef).then((response) => {
            console.log(response)
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    // setImageList((prev) => [...prev, url])
                    setImageList([url])
                })
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div>
            <input value={name} onChange={(e) => {setName(e.target.value)}} />
            <button onClick={handleAdd}>Add</button>
            <div>
                {imageList.map((url ,i) => {
                    return <img src={url} alt="" key={i}  />
                })}
            </div>
        </div>
        
    );
}
 
export default Testing;