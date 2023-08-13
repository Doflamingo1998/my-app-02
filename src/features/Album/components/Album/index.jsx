import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album ({ album }) {
    return (
        <div className="album">
            <div className="album_thumbnail">
                <img src={album.thumbnailUrl} alt={album.title} />
            </div>
            
            <p>{album.title}</p>
        </div>
    );
}

export default Album;