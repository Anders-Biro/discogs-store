import React, { Component } from "react";
import { fetchReleases } from "./data/Records";
import Loader from "./components/Loader";
import CollectionList from "./collections/CollectionList";
import { Pagination } from "@material-ui/lab";

class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = { releases: [], page: 1, count: 0, pageSize: 50, loaded: false };
    }

    pageSizes = [50, 75, 100];

    componentDidMount() {
        this.retreiveRecords(this.state.page);
    }

    retreiveRecords = () => {
        fetchReleases(this.state.page, this.state.pageSize).then(({ releases, pagination }) => {
            console.log(pagination)
            this.setState({ releases: releases, page: pagination.page, count: pagination.pages, pageSize: pagination.per_page, loaded: true });
        });
    }

    handlePageChange = (event, value) => {
        this.setState(
            {
                releases: this.state.releases,
                page: value,
                count: this.state.count,
                pageSize: event.target.value,
                loaded: true
            }, () => {
                this.retreiveRecords()
            }
        )
    }

    handlePageSizeChange = (event) => {
        this.setState(
            {
                releases: this.state.releases,
                page: 1,
                count: this.state.count,
                pageSize: event.target.value,
                loaded: true
                
            }, () => {
                this.retreiveRecords();
            }
        )
    }

    render() {
        const { releases, page, count, pageSize, loaded } = this.state;

        return (
            <div>
                {loaded ? (
                    <>
                        <CollectionList releases={releases} />
                        <div>
                            {"Items per Page: "}
                            <select onChange={this.handlePageSizeChange} value={pageSize}>
                                {this.pageSizes.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>

                            <Pagination shape="rounded" count={count} page={page} siblingCount={1} boundaryCount={1} variant="outlined" onChange={this.handlePageChange} />
                        </div>
                    </>
                ) : (
                    <Loader />
                )}
            </div>
        )
    }
}

export default Collection;