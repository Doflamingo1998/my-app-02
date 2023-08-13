import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';


AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            title: 'tensei slime',
            thumbnailUrl: 'https://i.truyenvua.com/ebook/190x247/tensei-shitara-slime-datta-ken_1447076423.jpg?gt=hdfgdfg&mobile=2'
        },
        {
            id: 2,
            title: 'Sad thu ve vuon',
            thumbnailUrl: 'https://i.truyenvua.com/ebook/190x247/sat-thu-ve-vuon_1606467892.jpg?gt=hdfgdfg&mobile=2'
        },
        {
            id: 3,
            title: '1000000',
            thumbnailUrl: 'https://i.truyenvua.com/ebook/190x247/i-m-standing-on-1000000-lives_1521472308.jpg?gt=hdfgdfg&mobile=2'
        },
    ]
    return (
        <div>
            <h3>Manga</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;