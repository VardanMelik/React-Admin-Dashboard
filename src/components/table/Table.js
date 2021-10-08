import React from 'react';
import './table.css';

const Table = props => {
    return (
        <div>
            <div className="table-wraper">
                <table>
                    {
                        props.headerData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headerData.map((item, index) => 
                                            props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <thead>
                                {
                                    props.bodyData.map((item, index) => props.renderBody(item, index))
                                }
                            </thead>
                        ) : null
                    }
                </table>
            </div>
        </div>
    )
}

export default Table