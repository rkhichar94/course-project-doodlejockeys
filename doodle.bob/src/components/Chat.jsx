import React, { Component } from 'react';
import "../styles.css";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { userid: 1, messageid: 1, messageText: "hey man" },
                { userid: 2, messageid: 2, messageText: "I think it's an iguana" },
                { userid: 3, messageid: 3, messageText: "nah...that's a walrus" },
                { userid: 1, messageid: 4, messageText: "u guys r silly" },
                { userid: 3, messageid: 5, messageText: "ohhhhhh" },
                { userid: 3, messageid: 6, messageText: "it's definitely a shoe" },
                { userid: 3, messageid: 7, messageText: "what??? how is that wrong?" },
                { userid: 2, messageid: 8, messageText: "lol oops" }
            ],
            orderedMessages: [],
            newMessage: "",
            messageidLast: 8
        };
        this.handleNewMessage = this.handleNewMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        let temp = this.state.messages.sort()
        // if (this.state.messageidLast % 2 != 0) {
        this.setState({
            orderedMessages: temp.reverse()
        })
        // }
    }

    handleNewMessage(event) {
        this.setState({
            newMessage: event.target.value
        });
    }

    sendMessage(event) {
        if (this.state.newMessage.length > 0) {
            this.setState({
                orderedMessages: this.state.orderedMessages.reverse()
            })
            let copyMessages = this.state.messages;
            copyMessages.push({
                userid: 1,
                messageid: this.state.messageidLast + 1,
                messageText: this.state.newMessage
            });
            this.setState({
                messages: copyMessages,
                newMessage: "",
                messageidLast: this.state.messageidLast + 1
            });
        }
        console.log(this.state.messageidLast)
        this.componentDidMount()
    }

    render(props) {
        return (
            <div className="App">
                <div className="conversation">
                    <header className="chatHeader">Chat and Guess!</header>
                    <p>Round {this.props.round}</p>
                    <hr></hr>
                    <div className="chatHistory">
                        {this.state.orderedMessages.map((message) => (
                            <div>
                                {message.userid === 1 && (
                                    <div>
                                        <p className="userNameChatSender">{this.props.userList[message.userid]["username"]}</p>
                                        <div className="messageBoxSender">
                                            <h5 className="messageTextSender">{message.messageText}</h5>
                                        </div>
                                    </div>
                                )}
                                {message.userid !== 1 && (
                                    <div>
                                        <p className="userNameChatReceiver">{this.props.userList[message.userid]["username"]}</p>
                                        <div className="messageBoxReceiver">
                                            <h5 className="messageTextReceiver">
                                                {message.messageText}
                                            </h5>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="sending">
                        <textarea
                            onChange={this.handleNewMessage}
                            value={this.state.newMessage}
                            className="messageArea"
                            placeholder="Send A Message..."
                        ></textarea>
                        <button
                            onClick={(event) => this.sendMessage(event)}
                            className="sendMessage"
                            type="submit"
                            value="Send"
                            name="PostContent"
                        >
                            Send
                </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;