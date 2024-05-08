function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
      <h2>Welcome</h2>
      <h3>Please answer {numQuestions} questions</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "start" })}
      >
        start
      </button>
    </div>
  );
}

export default StartScreen;
