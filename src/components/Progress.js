function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        //if Number is true => 1, if false = 0 it's a trick
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
