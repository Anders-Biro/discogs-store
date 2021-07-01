import React, { Component } from "react";
import { fetchReleases } from "../data/Records";
import Loader from "../components/Loader";
import CollectionList from "./CollectionList";
import { Pagination } from "@material-ui/lab";
import styles from './Collection.module.css';

class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = { releases: [], page: 1, count: 0, pageSize: 48, loaded: false };
    }

    pageSizes = [48, 72, 96];

    componentDidMount() {
        this.retreiveRecords(this.state.page);
    }

    retreiveRecords = () => {
        fetchReleases(this.state.page, this.state.pageSize).then(({ releases, pagination }) => {
            this.setState({ releases: releases, page: pagination.page, count: pagination.pages, pageSize: pagination.per_page, loaded: true });
        });
    }

    handlePageChange = (event, value) => {
        this.setState(
            {
                page: value,
                loaded: false
            }, () => {
                this.retreiveRecords()
            }
        )
        window.scrollTo(0, 0);
    }

    handlePageSizeChange = (event) => {
        this.setState(
            {
                page: 1,
                pageSize: event.target.value

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
                        <CollectionList releases={releases} format={this.props.format} onDetailViewClick={this.props.onDetailViewClick} />
                        <div className={styles.flexContainer}>
                            <div>
                                <Pagination shape="rounded" count={count} page={page} siblingCount={1} boundaryCount={1} variant="outlined" onChange={this.handlePageChange} />
                            </div>
                            <div>
                                {"Items per Page: "}
                                <select onChange={this.handlePageSizeChange} value={pageSize}>
                                    {this.pageSizes.map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
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