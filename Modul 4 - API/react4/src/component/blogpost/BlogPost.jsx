import React, {Component} from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="https://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">Judul Artikel</div>
                <p className="isi-artikel">Isi Artikel</p>
            </div>
        </div>
    )
}

export default Post;