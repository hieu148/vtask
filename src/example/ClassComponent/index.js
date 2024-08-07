import React from "react";

const fakeUser = [
    [
        'tunk_1_page_0',
        'tunk_2_page_0',
        'tunk_3_page_0',
    ],
    [
        'tunk_4_page_1',
        'tunk_5_page_1',
        'tunk_6_page_1',
    ],
    [
        'tunk_7_page_3',
        'tunk_8_page_3',
        'tunk_9_page_3',
    ]
]

const getUsersFromSever = (page) => {
    console.log('Getting users from server with page: ', page)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fakeUser[page]);
        }, 3000);
    })
}

class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0,
            users: []
        }
        console.log('Constructor run')
    }



    render() {
        console.log('Render run')
        return (
            <div>
                <h2> Hello class component </h2>
                <h3> Name: {this.props.name}</h3>
                <h3> Page: {this.state.page}</h3>
                <ul>
                    {
                        this.state.users.map(user => <h3> {user} </h3>)
                    }
                </ul>
                <button onClick={() => {
                    this.setState({
                        page: this.state.page +1
                    })
                }}> Next
                </button>
            </div>
        )
    }

    componentDidMount() {
        console.log('ComponentDidMount run')
        getUsersFromSever(this.state.page)
        .then(data => {
            this.setState({
                users: data
            })
        })
        .catch(err => {
            alert('Something went wrong!!!')
        })
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('ComponentDidUpdate run', prevState);
        if(this.state.page !== prevState.page){
            getUsersFromSever(this.state.page)
            .then(data => {
                this.setState({
                    users: data
                })
            })
            .catch(err => {
                alert('Something went wrong!!!')
            })
        }
    }

    componentWillUnmount() {

    }

}

export default ClassComponent