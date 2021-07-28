const AppMode = (props) => {
    return (
        <div className="appMode">
            <button onClick={() => props.chooseAppMode('diary')}>Diary</button>
            <button onClick={() => props.chooseAppMode('chat')}>Chat</button>
        </div>
    )
}

export default AppMode