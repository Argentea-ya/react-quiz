function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "😎";
  if (percentage < 100) emoji = "😊";
  return (
    <>
      <p className='result'>
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.floor(percentage)}%)
      </p>
      <p className='highscore'>highest score {highScore} points</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "reset" })}
      >
        Start again
      </button>
    </>
  );
}

export default FinishScreen;
