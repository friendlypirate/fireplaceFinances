const AppMode = (props) => {
    return (
        <div>
            <h1>Fireplace Finances</h1>
            <button onClick={() => props.chooseAppMode('diary')}>Savings Diary</button>
            <button onClick={() => props.chooseAppMode('chat')}>Let's have a chat</button>
        </div>
    )
}

export default AppMode