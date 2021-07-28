const AppMode = (props) => {
    return (
        <div>
            <button onClick={() => props.chooseAppMode('diary')}>Savings Diary</button>
            <button onClick={() => props.chooseAppMode('chat')}>Let's have a chat</button>
        </div>
    )
}

export default AppMode