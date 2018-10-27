import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
    onBtnClick = e => {
        const userName = e.currentTarget.innerText
        let playListId = '';

        switch(userName)
        {
            case 'SHIMOROSHOW':
            {
                playListId = 'LLOynRdpGiTCNFhCgD0RTe1w';
                break;
            }
            case 'THEBRAINDIT':
            {
                playListId = 'LLFBcrywVNeUOqtJgGhPEvQg';
                break;
            }
            case 'FOX86823':
            {
                playListId = 'LLz4KEygtdLIPNnryTeF7hog';
                break;
            }
        }


        this.props.getPhotos(playListId)
    }
    renderTemplate = () => {
        const { photos, isFetching, error } = this.props

        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else {
            return photos.map(entry => (
                <div key={entry.id} className="photo">
                        <img src={entry.url} alt="" width="50%" />
                    <p>{entry.likes.count} ❤</p>
                </div>
            ))
        }
    }

    render() {
        const { year, photos } = this.props
        return (
            <div className="ib page">
                <p>
                    <button className="btn" onClick={this.onBtnClick}>
                    SHIMOROSHOW
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        THEBRAINDIT
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        FOX86823
                    </button>{' '}
                </p>
                <h3>
                    Количество [{photos.length}]
                </h3>
                {this.renderTemplate()}
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
}