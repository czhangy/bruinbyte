import * as React from 'react';
import CommentsBlock from 'simple-react-comments';
import { commentsData } from './data/index'; // Some comment data

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: commentsData,
        };
    }

    render() {
        return (
            <div>
                <CommentsBlock
                    comments={this.state.comments}
                    signinUrl={'/signin'}
                    isLoggedIn
                    reactRouter // set to true if you are using react-router
                    onSubmit={text => {
                        if (text.length > 0) {
                            this.setState({
                                comments: [
                                    ...this.state.comments,
                                    {
                                        authorUrl: '#',
                                        avatarUrl: '#avatarUrl',
                                        createdAt: new Date(),
                                        fullName: 'Name',
                                        text,
                                    },
                                ],
                            });
                            console.log('submit:', text);
                        }
                    }}
                />
            </div>
        );
    }
}

export default App;