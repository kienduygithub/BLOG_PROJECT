import React, { useState } from "react";
import './Write.scss'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as postServices from '../services/postServices'
const Write = () => {
    const [ value, setValue ] = useState('');
    console.log(value)
    const [ title, setTitle ] = useState('');
    const [ file, setFile ] = useState(null);
    const [ category, setCategory ] = useState('');

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file)

            const response = await postServices.handleUploadFile(formData);
            if (response && response.status === 'OK') {
                alert(response.message);
                console.log(response.data)
            }
        } catch (error) {
           console.log(error) 
        }
    }
    const handleSubmit = async () => {
        upload()
    }
    return (
        <div className="write-container">
            <div className="content">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className="editor-container">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display: 'none'}} type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button type="button" onClick={() => handleSubmit()} >Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="item-radio">
                        <div className="radio-child">
                            <input type="radio" name="cat" value={"art"} id="art" onChange={(e) => setCategory(e.target.value)}/>
                            <label htmlFor="art">Art</label>
                            <input type="radio" name="cat" value={"technology"} id="technology" onChange={(e) => setCategory(e.target.value)}/>
                            <label htmlFor="technology">Technology</label>
                        </div>
                        <div className="radio-child">
                            <input type="radio" name="cat" value={"science"} id="science" onChange={(e) => setCategory(e.target.value)}/>
                            <label htmlFor="science">Science</label>
                            <input type="radio" name="cat" value={"cinema"} id="cinema" onChange={(e) => setCategory(e.target.value)}/>
                            <label htmlFor="cinema">Cinema</label>
                        </div>
                        <div className="radio-child">
                            <input type="radio" name="cat" value={"design"} id="design" onChange={(e) => setCategory(e.target.value)}/>
                            <label htmlFor="design">Design</label>
                            <input type="radio" name="cat" value={"food"} id="food" onChange={(e) => setCategory(e.target.value)}/>
                            <label htmlFor="food">Food</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Write);