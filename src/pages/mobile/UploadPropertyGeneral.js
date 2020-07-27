import React, {useState} from 'react'

import login from '../../images/login.png'
// import house from '../../images/house.jpg'
// import logoClient from '../../images/logo-client.png'

import GeneralContentProperties from './components/ContentGeneralProperties'

import Navigation from './Navigation'
import Footer from './Footer'

// import './css/home.css'
import './css/general.css'

import {
//   Link,
  useHistory
} from 'react-router-dom'

const UploadPropertyGeneral = () => {
    const history = useHistory()

    const [companyName, setCompanyName] = useState("")
    const [propertyName, setPropertyName] = useState("")
    const [propertyLocation, setPropertyLocation] = useState("")
    const [typeOfDocument, setTypeOfDocument] = useState("")
    const [youTubeLink, setYouTubeLink] = useState("https://www.youtube.com/embed/AN8Iq9IC6VE")
    const [propertyDescription, setPropertyDescription] = useState("")
    const [price, setPrice] = useState("")
    const [brochure, setBrochure] = useState("https://www.aoestatechariots.com/estates")
    const [flyers, setFlyers] = useState("https://www.aoestatechariots.com/estates")
    const [photoTwo, setPhotoTwo] = useState("")
    const [photoThree, setPhotoThree] = useState("")
    const [photoFour, setPhotoFour] = useState("")
    const [photoFive, setPhotoFive] = useState("")
    const [photoSix, setPhotoSix] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "ao-estate")
        data.append("cloud_name", "josh-equere")
        fetch("https://api.cloudinary.com/v1_1/josh-equere/image/upload", {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })

        fetch("https://aoestate-server-two.herokuapp.com/create-properties", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                companyName,
                propertyName,
                propertyLocation,
                typeOfDocument,
                youTubeLink,
                brochure,
                flyers,
                propertyDescription,
                price,
                pic: url,
                photoTwo,
                photoThree,
                photoFour,
                photoFive,
                photoSix
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert("Created post successfully")
                    history.push('/upload-general-property')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <div className="home-mobile">
            <Navigation />

            <div className="form-mobile">

                <div className="content">
                    <div className="text">
                        <h1>Upload General Property</h1>
                    </div>
                </div>

                <div className="form upload-form">
                    <div className="tab">
                        <label>Company Name</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Company name..."
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Property Name</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Property name..."
                            value={propertyName}
                            onChange={(e) => setPropertyName(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Price of Property</label>
                        <br />
                        <input
                            className="input" 
                            placeholder="Price of property..."
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Brochures of property</label>
                        <br />
                        <input
                            className="input" 
                            placeholder="Brochures of property..."
                            type="text"
                            value={brochure}
                            accept="application/pdf"
                            onChange={(e) => setBrochure(e.target.value)}
                        />
                    </div>
                    
                    {/* <div className="tab">
                        <label>Flyers of property</label>
                        <br />
                        <input
                            className="input" 
                            placeholder="Flyers of property..."
                            type="text"
                            value={flyers}
                            onChange={(e) => setFlyers(e.target.value)}
                        />
                    </div> */}
                    
                    <div className="tab">
                        <label>Pictures of Property</label>
                        <br />
                        <input
                            className="input" 
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Second picture of Property</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Second picture of property..."
                            value={photoTwo}
                            onChange={(e) => setPhotoTwo(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Third picture of Property</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Third picture of property..."
                            value={photoThree}
                            onChange={(e) => setPhotoThree(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Fourth picture of Property</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Fourth picture of property..."
                            value={photoFour}
                            onChange={(e) => setPhotoFour(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Fifth picture of Property</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Fifth picture of property..."
                            value={photoFive}
                            onChange={(e) => setPhotoFive(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Sixth picture of Property</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Sixth picture of property..."
                            value={photoSix}
                            onChange={(e) => setPhotoSix(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Property Location</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="Property location..."
                            value={propertyLocation}
                            onChange={(e) => setPropertyLocation(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Type Of Document</label>
                        <br />
                        <input
                            type="text"
                            className="input"
                            value={typeOfDocument}
                            onChange={(e) => setTypeOfDocument(e.target.value)}
                            placeholder="Type of document..."
                        />
                    </div>
                    
                    <div className="tab">
                        <label>YouTube Video Link</label>
                        <br />
                        <input
                            className="input" 
                            type="text"
                            placeholder="YouTube video link..."
                            value={youTubeLink}
                            onChange={(e) => setYouTubeLink(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Property Description</label>
                        <br />
                        <textarea
                            placeholder="Property description..."
                            value={propertyDescription}
                            onChange={(e) => setPropertyDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="button">
                        <button
                            onClick={() => postDetails()}
                        >
                            Send now →
                        </button>
                    </div>
                </div>

            </div>

            <GeneralContentProperties />

            <Footer />
        </div>
    )
    
}

export default UploadPropertyGeneral
