import { Component } from 'react';
import { fetchArtist, fetchRecord } from '../../data/Records';
import Modal from '../../UI/Modal';
import Artist from '../artist/Artist';
import Record from './Record';
import styles from './DetailRecord.module.css'

class DetailRecord extends Component {
    state = { release: {}, artist: {}, loaded: false }

    componentDidMount() {
        fetchRecord(this.props.releaseId).then(release => {
            fetchArtist(release.artists[0].id).then(artist => {
                this.setState({ release, artist, loaded: true })
            });
        });
    }

    render() {
        return this.state.loaded ? (
            <Modal onClose={this.props.onClose}>
                <div className={styles.content}>
                    <div className="row">{<Record release={this.state.release} />}</div>
                    <div className="row">{<Artist artist={this.state.artist} />}</div>
                </div>
            </Modal>
        ) : (
            <div />
        )
    }
}

export default DetailRecord;