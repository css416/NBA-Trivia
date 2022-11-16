import { useState, useEffect } from 'react';
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

import { usePlayerContext } from '../hooks/usePlayerContext';

// import img1 from '../assets/images/jersey/1.jpg'

const Score = () => {

    const [image,setImage] = useState()
    const { score, dispatch, setIsLoading } = usePlayerContext();

    const imageListRef = ref(storage, `ScoreImages/${score}/`)

        // set images
        useEffect(() => {
            listAll(imageListRef).then((response) => {
                response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        // setImageList((prev) => [...prev, url])
                        setImage(url)
                        // setIsLoading(false)
                    })
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (
        <>
        <div className="question-container score">
            <h2>You scored <u>{score}</u> out of 10</h2>
            <div className="img-restart">
                {/* {image.map((url ,i) => {
                    return <img src={url} alt="" className="jersey-img" key={i}  />
                })} */}
                <img src={image} alt="" className="jersey-img" />
                <div>
                    <button className="btn restart-btn" 
                            onClick={() => {
                                    dispatch({type: 'RESTART_QUIZ'})
                                    setIsLoading(true)
                                }
                            }>
                        Play Again</button>
                </div>
            </div>
        </div>
     </>
    );
}
 
export default Score;