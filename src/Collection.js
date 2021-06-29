import React, { Component } from "react";
import { fetchReleases } from "./data/Records";
import Loader from "./components/Loader";
import CollectionList from "./collections/CollectionList";

class Collection extends Component {
    state = { releases: [], pagination: {}, loaded: false };

    componentDidMount() {
        fetchReleases().then(({ releases,  pagination }) => {
            console.log(releases)
            this.setState({ releases, pagination, loaded: true});
        });
    }

    render() {
        const { releases, pagination, loaded } = this.state;

        return (
            <div>
                {loaded ? (
                    <CollectionList releases={releases} />
                ) : (
                    <Loader />
                )}
            </div>
        )
    }
}

export default Collection;