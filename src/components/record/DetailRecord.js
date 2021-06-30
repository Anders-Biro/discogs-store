import { Component } from 'react';
import { fetchArtist, fetchRecord } from '../../data/Records';
import Modal from '../../UI/Modal';
import Artist from '../artist/Artist';
import Record from './Record';

class DetailRecord extends Component {
    state = { release: {}, artist: {}, loaded: false}

    componentDidMount() {
        fetchRecord(this.props.releaseId).then(release => {
            fetchArtist(release.artists[0].id).then(artist => {
                this.setState({ release, artist, loaded: true })
                console.log(artist);
            });
        });
    }

    render() {
        return this.state.loaded ? (
            <Modal onClose={this.props.onClose}>
                <div className="row">{<Record release={this.state.release}/>}</div>
                <div className="row">{<Artist artist={this.state.artist}/>}</div>
            </Modal>
        ) : (
            <div/>
        )
    }
}

export default DetailRecord;