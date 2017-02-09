import React from 'react';
//import HackerCell from './HackerCell';
import {Button, Icon} from 'react-materialize';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import StatusBar from './StatusBar';
import ProfilePicture from './ProfilePicture';
import SkillTags from './SkillTags';
import HackerActionButtons from './HackerActionButtons';


let callback = {
    onClickAcept: null,
    onClickReject: null
};

const columns = [
    {
        header: 'Status',
        accessor: 'status',
        render: ({value}) => <StatusBar status={value} />
    },
    {
        header: '',
        accessor: 'picture',
        render: ({value}) => <ProfilePicture source={value} />
    },
    {
        header: 'Name',
        accessor: 'name',
        render: ({value, rowValues}) => <a href={'mailto:'+rowValues.email}>{value}</a>
    },
    {
        header: 'Skills (darker=stronger)',
        accessor: 'skills',
        render: ({value}) => <SkillTags skills={value} />
    },
    {
        header: '',
        accessor: 'id',
        render: ({value, rowValues}) => (<HackerActionButtons 
            onClickAccept={callback.onClickAccept} 
            onClickReject={callback.onClickReject} 
            status={rowValues.status} 
            id={value} /> )
    },

]

const HackerList = ( { hackers, loading, totalCountHackersUnfiltered, onClickAccept, onClickReject} ) => {
    callback.onClickAccept = onClickAccept;
    callback.onClickReject = onClickReject;
    return (
        <div>
            {
                (hackers.length === 0) &&
                    <h5>
                        No results. Try removing filters.
                    </h5>
            }
            {
                loading &&
                    <h5>
                        Loading...
                    </h5>
            }

            <ReactTable 
                data={hackers}
                columns={columns}
                defaultPageSize={10}
            />
        </div>
    )
};

export default HackerList;
